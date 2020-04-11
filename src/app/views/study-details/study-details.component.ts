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
  public dataSource: string[];
  public id: number;

  studiesDisplayedColumns: string[] = ['uid', 'level', 'title', 'institution', 'date', 'certificate', 'actions'];

  @Input() public user: User;
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
        data.uid = this.user.studies.map((value) => value.uid).reduce((total, cur) => { return cur > total ? cur : total }) + 1;

        let newUser: Partial<User> = {};
        newUser.id = this.user.id;
        newUser.studies = [];

        this.user.studies.map(value => newUser.studies.push(value));
        newUser.studies.push(data);
        console.log('data has been pushed');
        this.usersStorefacade.updateUser(newUser);
      });
  }
  edit(element) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = element;

    const dialogRef = this.dialog.open(StudyDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {

        let newUser: Partial<User> = {};
        newUser.id = this.user.id;
        newUser.studies = this.user.studies.filter((cur) => cur.uid !== data.uid);
        newUser.studies.push(data);

        this.usersStorefacade.updateUser(newUser);
      });
  }
  cancelOrDelete(element) {

    let newUser: Partial<User> = {};
    newUser.id = this.user.id;
    newUser.studies = this.user.studies.filter((cur) => cur.uid !== element.uid);
    this.usersStorefacade.updateUser(newUser);
  }
}
