import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '@shared/models/experience.model';
import { User } from '@shared/models/user.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { WorkExperienceDetailsDialogComponent } from '@views/work-experience-details-dialog/work-experience-details-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import moment from 'moment';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss']
})
export class WorkExperiencesComponent implements OnInit {
  @Input() theme: string;
  public experiences: Experience[];
  public currentExpId: number;
  public user: User;


  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStorefacade.getUserById(id))
  );

  experiencesDisplayedColumns: string[] = ['company', 'position', 'startdate', 'enddate', 'actions'];

  constructor(private dialog: MatDialog, private usersStorefacade: UsersStoreFacade,
    private route: ActivatedRoute, private dateAdapter: DateAdapter<Date>) {
    this.user$.subscribe((user) => {
      this.experiences = user.experiences;
      this.user = user;
    });
  }

  ngOnInit(): void {
  }
  createNew() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = this.theme;
    dialogConfig.data = {
      company: '',
      position: '',
      startdate: '01/01/1970',
      enddate: '01/01/1970',
      tasks: ''
    };
    this.currentExpId = this.user.studies.map((value) => value.uid).reduce((total, cur) => { return cur > total ? cur : total }) + 1;

    const dialogRef = this.dialog.open(WorkExperienceDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          data.uid = this.user.languages.map((value) => value.uid).reduce((total, cur) => { return cur > total ? cur : total }) + 1;
          data.startdate = moment(data.startdate).format('DD/MM/YYYY');
          data.enddate = moment(data.enddate).format('DD/MM/YYYY');

          let newUser: Partial<User> = {};
          newUser.id = this.user.id;
          newUser.experiences = [];

          this.user.experiences.map(value => newUser.experiences.push(value));
          newUser.experiences.push(data);
          this.usersStorefacade.updateUser(newUser);
        }
      }
    );
  }

  edit(element, idx) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = this.theme;
    console.log(element);
    this.currentExpId = this.experiences[idx].uid;
    dialogConfig.data = element;

    const dialogRef = this.dialog.open(WorkExperienceDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {

          data.startdate = moment(data.startdate).format('DD/MM/YYYY');
          data.enddate = moment(data.enddate).format('DD/MM/YYYY');

          let newUser: Partial<User> = {};
          newUser.id = this.user.id;

          let newExp = <Experience>{};
          Object.assign(newExp, data);
          newExp.uid = this.currentExpId;

          newUser.experiences = this.user.experiences.filter(value => value.uid != this.currentExpId);
          newUser.experiences.push(newExp);
          console.log('data has been pushed');
          this.usersStorefacade.updateUser(newUser);
        }
      }
    );

  }
  cancelOrDelete(idx) {

    this.currentExpId = this.experiences[idx].uid;

    let newUser: Partial<User> = {};
    newUser.id = this.user.id;

    newUser.experiences = this.user.experiences.filter((cur) => cur.uid !== this.currentExpId);
    this.usersStorefacade.updateUser(newUser);

  }
}










