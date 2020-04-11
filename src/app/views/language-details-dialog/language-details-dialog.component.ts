import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { languageCatalog, languageLevels, Language } from '@shared/models/language.model';
import { DateAdapter } from '@angular/material/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-language-details-dialog',
  templateUrl: './language-details-dialog.component.html',
  styleUrls: ['./language-details-dialog.component.scss']
})


export class LanguageDetailsDialogComponent implements OnInit {

  public languageDetailsDlgForm: FormGroup;
  languageList: string[] = [];
  levelList: string[] = [];
  currentLanguage: Language;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<LanguageDetailsDialogComponent>,
    private dateAdapter: DateAdapter<Moment>, @Inject(MAT_DIALOG_DATA) data) {

    this.languageList = languageCatalog.map((cur) => { return cur.name });
    this.languageList.push('Otro');
    this.levelList = languageLevels.map((cur) => { return cur.name });

    const startdate = new Date(data.date);
    console.log("startdate:  " + data.date);

    this.currentLanguage = data;

    this.languageDetailsDlgForm = this.formBuilder.group({
      uid: [{ value: data.uid, disabled: false }, null],
      languageName: [data.name.name, Validators.required],
      other: ['',],
      languageLevel: [data.level.name, Validators.required],
      date: new FormControl(data.date, [])
    });
    this.languageDetailsDlgForm.get('languageName').setValue(data.name.name);
    this.languageDetailsDlgForm.get('languageLevel').setValue(data.level.name);

  }

  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close();
  }
  save() {
    let lang = <Language>{};
    lang.uid = this.currentLanguage.uid;

    lang.level = languageLevels.find((level) => level.name === this.languageDetailsDlgForm.get('languageLevel').value);
    lang.name = languageCatalog.find((lang) => lang.name === this.languageDetailsDlgForm.get('languageName').value);
    //lang.date = this.dateAdapter.format(this.languageDetailsDlgForm.get('date').value, "dd/MM/yyyy");

    this.dialogRef.close(lang);
  }
}
