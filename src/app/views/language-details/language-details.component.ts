import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Language } from '@shared/models/language.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LanguageDetailsDialogComponent } from '../language-details-dialog/language-details-dialog.component';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '@shared/models/user.model';
import moment from 'moment';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent implements OnInit {
  public languages: Language[];
  public currentLangUid: number;
  public user: User;

  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStorefacade.getUserById(id))
  );

  languagesDisplayedColumns: string[] = ['languageName', 'languageLevel', 'date', 'actions'];

  constructor(private dialog: MatDialog, private usersStorefacade: UsersStoreFacade,
    private route: ActivatedRoute, private dateAdapter: DateAdapter<Date>) {

    this.user$.subscribe((user) => {
      this.languages = user.languages;
      this.user = user;

      if (user.languages) {
        this.languages = [];

        user.languages.map((cur) => {
          let newLang = <Language>{};
          Object.assign(newLang, cur)
          if (cur.date) {
            newLang.date = moment.unix(Number(cur.date)).format("DD/MM/YYYY");
            this.languages.push(newLang);
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

    dialogConfig.data = {
      level: { uid: 0, name: '' },
      name: { uid: 0, name: '' },
      date: '01/01/1970'
    };
    this.currentLangUid = this.user.languages.map((value) => value.uid).reduce((total, cur) => { return cur > total ? cur : total }) + 1;

    const dialogRef = this.dialog.open(LanguageDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {

          let newUser: Partial<User> = {};
          newUser.id = this.user.id;
          newUser.languages = [];

          let newLang = <Language>{};
          Object.assign(newLang, data);
          newLang.uid = this.currentLangUid;
          newLang.date = data.date.unix().toString();

          newUser.languages.push(newLang);
          this.user.languages.map(value => newUser.languages.push(value));
          console.log('data has been pushed');
          this.usersStorefacade.updateUser(newUser);
        }
      }
    );
  }
  edit(element, idx) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    console.log(element);
    this.currentLangUid = this.user.languages[idx].uid;
    dialogConfig.data = element;

    const dialogRef = this.dialog.open(LanguageDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {

          let newUser: Partial<User> = {};
          newUser.id = this.user.id;
          newUser.languages = [];

          newUser.languages = this.user.languages.filter(value => value.uid != this.currentLangUid);

          let newLang = <Language>{};
          Object.assign(newLang, data);
          newLang.uid = this.currentLangUid;
          newLang.date = data.date.unix().toString();

          newUser.languages.push(newLang);
          console.log('data has been pushed');
          this.usersStorefacade.updateUser(newUser);
        }
      }
    );

  }
  cancelOrDelete(idx) {

    this.currentLangUid = this.user.languages[idx].uid;

    let newUser: Partial<User> = {};
    newUser.id = this.user.id;
    newUser.languages = this.user.languages.filter((cur) => cur.uid !== this.currentLangUid);
    this.usersStorefacade.updateUser(newUser);

  }

}
