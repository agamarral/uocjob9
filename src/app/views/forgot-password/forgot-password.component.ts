import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { combineLatest } from 'rxjs';
import { User } from '@shared/models/user.model'
import { Company } from '@shared/models/company.model'
import { newArray } from '@angular/compiler/src/util';
import { CompanyOffersDetailsDialogComponent } from '@views/company-offers-details-dialog/company-offers-details-dialog.component';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public recallPsswdForm: FormGroup;
  public isUsernameValid: boolean = true;
  public isConfirmationValid: boolean = true;
  public showConfirm: boolean = false;
  public confirmationMatch: boolean = true;

  constructor(private fb: FormBuilder, private usersStoreFacade: UsersStoreFacade,
    private companiesStoreFacade: CompaniesStoreFacade, private router: Router) {

    this.createForm();
  }
  createForm() {
    this.recallPsswdForm = this.fb.group({
      username: [null, [Validators.required, Validators.email]],
      confirmation: [{ value: null, disabled: true }, [Validators.required, Validators.email]],
    });
  }
  ngOnInit() {
    this.recallPsswdForm.get('username').statusChanges.subscribe(val => this.onNameValidation(val));
    this.recallPsswdForm.get('confirmation').statusChanges.subscribe(val => this.checkConfirmation(val));
  }
  onNameValidation(validity: string) {
    this.isUsernameValid = (validity !== 'INVALID');
    if (this.isUsernameValid) {
      this.recallPsswdForm.get('confirmation').enable();
    }
  }
  checkConfirmation(validity: string) {
    this.isConfirmationValid = (validity !== 'INVALID');
    if (this.isConfirmationValid) {
      let username = this.recallPsswdForm.get('username').value;
      let confirmation = this.recallPsswdForm.get('confirmation').value;

      this.confirmationMatch = (username == confirmation);
    }
  }
  recallPassword() {
    let username = this.recallPsswdForm.get('username').value;
    console.log("recall password requested for user " + username);

    combineLatest(this.usersStoreFacade.getUserByUsername(username),
      this.companiesStoreFacade.getCompanyByUsername(username)).subscribe(
        ([student, company]) => {

          if (student && student.hasOwnProperty('username')) {

            let newUser: Partial<User> = {};

            Object.assign(newUser, student);
            newUser.psswrequest = true;

            this.usersStoreFacade.updateUser(newUser);
            this.router.navigate(['signin']);

          } else if (company && company.hasOwnProperty('username')) {
            // the observable fron user has returned a valid object, then login
            // as a student
            let newCompany: Partial<Company> = {};

            Object.assign(newCompany, company);
            newCompany.psswrequest = true;

            this.companiesStoreFacade.updateCompany(newCompany);
            this.router.navigate(['signin']);

          } else {
            this.router.navigate(['signup']);
            console.log('Login for user ' + username + ' has failed, unknown username or password');
          }
        }
      );
  }
  goToSignup() {
    this.router.navigate(['signup']);
  }

}




