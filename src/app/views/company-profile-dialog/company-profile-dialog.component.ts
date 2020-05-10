import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import * as towndata from '@assets/jsondata/munic.json';
import { usernameValidator } from '../validators/username-validator';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { Company } from '@shared/models/company.model';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-company-profile-dialog',
  templateUrl: './company-profile-dialog.component.html',
  styleUrls: ['./company-profile-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyProfileDialogComponent implements OnInit {
  public companyProfileDlgForm: FormGroup;
  public selectedProvince: string;
  public provinceList: string[] = [];
  public townList: string[] = [];
  matcher = new MyErrorStateMatcher();

  private company: Company;

  public errors: { [key: string]: string } = {
    namelength: 'El contenido de este campo debe tener una longitud entre 3 y 55 caracteres',
    pattern: 'Este campo solo debe contener caracteres alfanuméricos',
    spaces: 'Este campo no debe contener espacios al principio o al final del texto',
    email: 'Por favor, introduce una dirección de correo válida'
  };

  constructor(private formBuilder: FormBuilder, private companiesStoreFacade: CompaniesStoreFacade,
    private dialogRef: MatDialogRef<CompanyProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.company = data;
    towndata['default'].forEach((value) => { this.provinceList.push(value.name) });
    this.updateTownList(data.address.province.name);

    this.companyProfileDlgForm = this.formBuilder.group({
      brand: [data.brand, [Validators.minLength(3), Validators.maxLength(255), usernameValidator, Validators.pattern(/[a-zA-Z0-9&_\.-]/)]],
      company: [data.company, [Validators.minLength(3), Validators.maxLength(255), usernameValidator, Validators.pattern(/[a-zA-Z0-9&_\.-]/)]],
      cif: [data.cif, Validators.required],
      url: [data.url, Validators.required],
      address: [data.address.street, Validators.required],
      province: [data.address.province.name, Validators.required],
      municipe: [data.address.municipe.name, Validators.required],
      name: [data.contact.name, [Validators.minLength(3), Validators.maxLength(55), usernameValidator, Validators.pattern(/[a-zA-Z0-9&_\.-]/)]],
      surname: [data.contact.surname, [Validators.minLength(3), Validators.maxLength(55), usernameValidator, Validators.pattern(/[a-zA-Z0-9&_\.-]/)]],
      phone: [data.contact.phone, Validators.required],
      username: [data.contact.email, [Validators.required, Validators.email]]
    });
    this.companyProfileDlgForm.get('province').setValue(data.address.province.name);
    this.companyProfileDlgForm.get('municipe').setValue(data.address.municipe.name);
  }

  ngOnInit(): void {
  }
  hasError(event: any): void {

    if (!event && this.companyProfileDlgForm.value.phone !== '') {
      this.companyProfileDlgForm.get('phone').setErrors(['invalid_cell_phone', true]);
    }
  }
  close() {
    this.dialogRef.close();
  }
  save() {

    let partial: Partial<Company> = {};

    partial.id = this.company.id;
    partial.brand = this.companyProfileDlgForm.get('brand').value;
    partial.company = this.companyProfileDlgForm.get('company').value;
    partial.cif = this.companyProfileDlgForm.get('cif').value;
    partial.url = this.companyProfileDlgForm.get('url').value;

    let provObj = towndata['default'].find((cur) => cur.name === this.companyProfileDlgForm.get('province').value);
    let townObj = provObj['towns'].find((cur) => cur.name === this.companyProfileDlgForm.get('municipe').value);

    partial.address = {
      street: this.companyProfileDlgForm.get('address').value,
      municipe: townObj,
      province: { uid: provObj.uid, name: provObj.name }
    };

    partial.contact = {
      name: this.companyProfileDlgForm.get('name').value,
      surname: this.companyProfileDlgForm.get('surname').value,
      phone: this.companyProfileDlgForm.get('phone').value,
      email: this.companyProfileDlgForm.get('username').value
    }

    this.companiesStoreFacade.updateCompany(partial);
    this.dialogRef.close(this.companyProfileDlgForm.value);
  }
  updateTownList(provinceName) {
    let provObj = towndata['default'].find((cur) => cur.name === provinceName);
    this.townList = [];
    provObj['towns'].forEach((value) => { this.townList.push(value.name) });
  }

  changeTown() {
    let provinceName = this.companyProfileDlgForm.get('province').value;
    this.updateTownList(provinceName);
  }
}



