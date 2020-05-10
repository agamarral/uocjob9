import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import * as towndata from '@assets/jsondata/munic.json';
import { idValidator } from '../validators/nif-validator';
import { usernameValidator } from '../validators/username-validator';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { User } from '@shared/models/user.model';
import moment from 'moment';
/* import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import {
  MomentDateAdapter
} from '@angular/material-moment-adapter'; */

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
/* export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY'
  }
}; */

@Component({
  selector: 'app-personal-details-dialog',
  templateUrl: './personal-details-dialog.component.html',
  styleUrls: ['./personal-details-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
  /*   providers: [
      { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }] */
})
export class PersonalDetailsDialogComponent implements OnInit {

  public personalDetailsDlgForm: FormGroup;
  public selectedProvince: string;
  public provinceList: string[] = [];
  public townList: string[] = [];
  matcher = new MyErrorStateMatcher();
  private user: User;
  public theme: string;

  public errors: { [key: string]: string } = {
    id: 'El formato de identificador es incorrecto',
    namelength: 'El contenido de este campo debe tener una longitud entre 3 y 55 caracteres',
    pattern: 'Este campo solo debe contener caracteres alfanuméricos',
    spaces: 'Este campo no debe contener espacios al principio o al final del texto'
  };
  licenseList: string[] = ['Ninguno', 'AM', 'A1', 'A2', 'A', 'B1', 'B', 'C1', 'C', 'D1', 'D', 'BE', 'C1E', 'CE', 'D1E', 'DE'];


  constructor(private formBuilder: FormBuilder, private usersStorefacade: UsersStoreFacade,
    private dialogRef: MatDialogRef<PersonalDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.user = data;

    towndata['default'].forEach((value) => { this.provinceList.push(value.name) });
    this.updateTownList(data.address.province.name);

    const startdate = new Date(moment(data.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD'));

    this.personalDetailsDlgForm = this.formBuilder.group({
      name: [data.name, [Validators.minLength(3), Validators.maxLength(55), usernameValidator, Validators.pattern(/[a-zA-Z0-9&_\.-]/)]],
      surname: [data.surname, [Validators.minLength(3), Validators.maxLength(55), usernameValidator, Validators.pattern(/[a-zA-Z0-9&_\.-]/)]],
      birthdate: new FormControl(startdate, []),
      phone: [data.phone, Validators.required],
      phone2: [data.phone2, Validators.required],
      documentType: [data.documentType.name, Validators.required],
      documentNumber: [data.documentNumber, [idValidator]],
      address: [data.address.street, Validators.required],
      province: [data.address.province.name, Validators.required],
      municipe: [data.address.municipe.name, Validators.required],
      license: [data.license, Validators.required],
      aboutMe: data.aboutMe,
      otherCompetences: data.otherCompetences
    });
    this.personalDetailsDlgForm.get('province').setValue(data.address.province.name);
    this.personalDetailsDlgForm.get('municipe').setValue(data.address.municipe.name);
    this.personalDetailsDlgForm.get('license').setValue(data.license.split(','));


  }
  hasError(event: any): void {

    if (!event && this.personalDetailsDlgForm.value.phone !== '') {
      this.personalDetailsDlgForm.get('phone').setErrors(['invalid_cell_phone', true]);
    }
  }
  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
  save() {

    let partial: Partial<User> = {};
    Object.assign(partial, this.user);

    partial.name = this.personalDetailsDlgForm.get('name').value;
    partial.surname = this.personalDetailsDlgForm.get('surname').value;

    partial.phone = this.personalDetailsDlgForm.get('phone').value;
    partial.phone2 = this.personalDetailsDlgForm.get('phone2').value;

    if (this.personalDetailsDlgForm.get('documentType').value === 'NIF') {
      partial.documentType = { uid: 1, name: 'NIF' };
    } else {
      partial.documentType = { uid: 2, name: 'NIE' };
    }

    partial.documentNumber = this.personalDetailsDlgForm.get('documentNumber').value;

    let provObj = towndata['default'].find((cur) => cur.name === this.personalDetailsDlgForm.get('province').value);
    let townObj = provObj['towns'].find((cur) => cur.name === this.personalDetailsDlgForm.get('municipe').value);


    partial.address = {
      street: this.personalDetailsDlgForm.get('address').value,
      municipe: townObj,
      province: { uid: provObj.uid, name: provObj.name }
    };

    partial.birthdate = moment(this.personalDetailsDlgForm.get('birthdate').value).format('DD/MM/YYYY');

    this.usersStorefacade.updateUser(partial);
    this.dialogRef.close(this.personalDetailsDlgForm.value);
  }
  updateTownList(provinceName) {
    let provObj = towndata['default'].find((cur) => cur.name === provinceName);
    this.townList = [];
    provObj['towns'].forEach((value) => { this.townList.push(value.name) });
  }

  changeTown() {
    let provinceName = this.personalDetailsDlgForm.get('province').value;
    this.updateTownList(provinceName);
  }

}
