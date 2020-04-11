import { Component, OnInit, Input } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Language, languageCatalog, languageLevels } from '@shared/models/language.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LanguageDetailsDialogComponent } from '../language-details-dialog/language-details-dialog.component';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent implements OnInit {
  public languages: Language[];
  public dataSource: string[];
  public id: number;
  public currentLangUid: number;

  @Input() public user: User;
  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStorefacade.getUserById(id))
  );

  languagesDisplayedColumns: string[] = ['uid', 'languageName', 'languageLevel', 'date', 'actions'];

  constructor(private dialog: MatDialog, private usersStorefacade: UsersStoreFacade,
    private route: ActivatedRoute, private dateAdapter: DateAdapter<Date>) {

    this.user$.subscribe((user) => this.languages = user.languages);

  }

  ngOnInit(): void {

  }
  createNew() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      uid: -1,
      level: { uid: 0, name: '' },
      name: { uid: 0, name: '' },
      date: '01/01/1970'
    };
    this.currentLangUid = -1;

    const dialogRef = this.dialog.open(LanguageDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          data.uid = this.user.languages.map((value) => value.uid).reduce((total, cur) => { return cur > total ? cur : total }) + 1;

          let newUser: Partial<User> = {};
          newUser.id = this.user.id;
          newUser.languages = [];

          this.user.languages.map(value => newUser.languages.push(value));
          newUser.languages.push(data);
          console.log('data has been pushed');
          this.usersStorefacade.updateUser(newUser);

        }
      }
    );
  }
  convertDates() {
    // date is set to a readable format
    this.languages.forEach((cur) => { cur.date = this.dateAdapter.format(new Date(parseInt(cur.date) * 1000), "dd/MM/yyyy") });
  }
  edit(element) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    console.log(element);
    this.currentLangUid = element.uid;
    dialogConfig.data = element;

    const dialogRef = this.dialog.open(LanguageDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {

          let newUser: Partial<User> = {};
          newUser.id = this.user.id;
          newUser.languages = [];

          newUser.languages = this.user.languages.filter(value => value.uid != data.uid);
          newUser.languages.push(data);
          console.log('data has been pushed');
          this.usersStorefacade.updateUser(newUser);
        }
      }
    );

  }
  cancelOrDelete(element) {

    let newUser: Partial<User> = {};
    newUser.id = this.user.id;
    newUser.languages = this.user.languages.filter((cur) => cur.uid !== element.uid);
    this.usersStorefacade.updateUser(newUser);

  }

}
