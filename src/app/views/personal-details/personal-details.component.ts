import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PersonalDetailsDialogComponent } from '../personal-details-dialog/personal-details-dialog.component';
import { User } from '../../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements OnInit {
  @Input() public user: User;

  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStorefacade.getUserById(id))
  );

  public isUsernameValid: boolean = true;
  public isPasswordValid: boolean = true;
  public isReadOnly = false;

  constructor(private dialog: MatDialog, private usersStorefacade: UsersStoreFacade, private route: ActivatedRoute) {

    this.initialize_user();
    this.user$.subscribe(
      (value) => {

        this.isReadOnly = false;
        this.user = value;
        this.isReadOnly = true;

      }
    );
  }

  ngOnInit() {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.user;

    const dialogRef = this.dialog.open(PersonalDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
      }
    );
  }
  initialize_user() {
    this.user = {
      password: '',
      psswrequest: false,
      id: -1,
      username: '',
      avatar_hash: '',
      name: '',
      surname: '',
      email: '',
      birthdate: '',
      phone: '',
      phone2: '',
      documentType: { uid: 2, name: 'NIF' },
      documentNumber: '',
      address: { street: '', province: { uid: 0, name: '' }, municipe: { uid: 0, name: '' } },
      roles: [],
      studies: [{
        uid: 1,
        level: { uid: 0, name: '' },
        title: { uid: 0, name: '' },
        institution: { uid: 0, name: '' },
        date: '0',
        certificate: false,
        bilingue: false,
        category: { uid: 0, name: '' },
        grade: { uid: 1, name: '' },
        dual: false
      }],
      experiences: [],
      languages: [],
      offers: [],
      license: '',
      aboutMe: '',
      otherCompetences: ''
    }
  }

}