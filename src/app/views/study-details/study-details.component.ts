import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CollegeStudy, VocationalStudy } from '@shared/models/study.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudyDetailsDialogComponent } from '../study-details-dialog/study-details-dialog.component';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '@shared/models/user.model';
import moment from 'moment';


@Component({
  selector: 'app-study-details',
  templateUrl: './study-details.component.html',
  styleUrls: ['./study-details.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudyDetailsComponent implements OnInit {
  public studies: (CollegeStudy | VocationalStudy)[] = [];
  public currentStudy: (CollegeStudy | VocationalStudy);
  public dataSource: string[];
  public user: User;

  studiesDisplayedColumns: string[] = ['level', 'title', 'institution', 'date', 'certificate', 'actions'];


  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStorefacade.getUserById(id))
  );

  constructor(private dialog: MatDialog, private usersStorefacade: UsersStoreFacade,
    private route: ActivatedRoute) {
    this.user$.subscribe((user) => {
      this.user = user;
      // convertDates 
      if (user.studies) {
        this.studies = [];

        user.studies.map((cur) => {
          let newStudy = <(CollegeStudy | VocationalStudy)>{};
          Object.assign(newStudy, cur)
          if (cur.date) {
            newStudy.date = moment.unix(Number(cur.date)).format("DD/MM/YYYY");
            this.studies.push(newStudy);
          }
        });
      }
    });
  }

  ngOnInit(): void {

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

        newStudy.uid = this.user.studies.length + 1;

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
        if (data) {
          let newUser: Partial<User> = {};
          newUser.id = this.user.id;
          newUser.studies = this.user.studies.filter((cur) => cur.uid !== this.currentStudy.uid);

          let newStudy = <CollegeStudy | VocationalStudy>{};
          newStudy.uid = this.currentStudy.uid;
          Object.assign(newStudy, data);

          newUser.studies.push(newStudy);

          this.usersStorefacade.updateUser(newUser);
        }
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
