import { Component, OnInit, Input } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { CollegeStudy, VocationalStudy } from '@shared/models/study.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudyDetailsDialogComponent } from '../study-details-dialog/study-details-dialog.component';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-study-details',
  templateUrl: './study-details.component.html',
  styleUrls: ['./study-details.component.scss']
})
export class StudyDetailsComponent implements OnInit {
  public studies: (CollegeStudy | VocationalStudy)[];
  public currentStudy: (CollegeStudy | VocationalStudy);
  public dataSource: string[];
  public user: User;

  studiesDisplayedColumns: string[] = ['level', 'title', 'institution', 'date', 'certificate', 'actions'];


  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStorefacade.getUserById(id))
  );

  constructor(private dialog: MatDialog, private usersStorefacade: UsersStoreFacade, private dateAdapter: DateAdapter<Date>,
    private route: ActivatedRoute) {

    this.user$.subscribe((user) => {
      this.user = user;
      this.studies = user.studies;
    });
  }

  ngOnInit(): void {
  }
  convertDates() {
    // date is set to a readable format
    this.studies.forEach((cur) => { cur.date = this.dateAdapter.format(new Date(parseInt(cur.date) * 1000), "dd/MM/yyyy") });
  }
  createNew() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(StudyDetailsDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {

        let newUser: Partial<User> = {};
        newUser.id = this.user.id;
        newUser.studies = [];

        let newStudy = <CollegeStudy | VocationalStudy>{};
        Object.assign(newStudy, data);
        newStudy.uid = this.user.studies.map((value) => value.uid).reduce((total, cur) => { return cur > total ? cur : total }) + 1;


        newUser.studies.push(newStudy);
        this.user.studies.map(value => newUser.studies.push(value));

        console.log('data has been pushed');
        this.usersStorefacade.updateUser(newUser);
      });
  }
  edit(element, idx) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = element;
    this.currentStudy = this.user.studies[idx];

    const dialogRef = this.dialog.open(StudyDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {

        let newUser: Partial<User> = {};
        newUser.id = this.user.id;
        newUser.studies = this.user.studies.filter((cur) => cur.uid !== this.currentStudy.uid);

        let newStudy = <CollegeStudy | VocationalStudy>{};
        newStudy.uid = this.currentStudy.uid;
        Object.assign(newStudy, data);

        newUser.studies.push(newStudy);

        this.usersStorefacade.updateUser(newUser);
      });
  }
  cancelOrDelete(idx) {

    this.currentStudy = this.user.studies[idx];

    let newUser: Partial<User> = {};
    newUser.id = this.user.id;
    newUser.studies = this.user.studies.filter((cur) => cur.uid !== this.currentStudy.uid);
    this.usersStorefacade.updateUser(newUser);
  }
}
