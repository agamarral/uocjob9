import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SigninComponent implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  public signinForm: FormGroup;
  public isUsernameValid: boolean = true;
  public isPasswordValid: boolean = true;


  constructor(private fb: FormBuilder, private usersStoreFacade: UsersStoreFacade, private companiesStoreFacade: CompaniesStoreFacade, private router: Router) {

    this.createForm();
  }
  ngOnInit() {

    this.signinForm.get('username').statusChanges.subscribe(val => this.onNameValidation(val));
    this.signinForm.get('password').statusChanges.subscribe(val => this.onPasswordValidation(val));
  }
  createForm() {
    this.signinForm = this.fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }
  loginUser() {
    const username = this.signinForm.get('username').value;
    const password = this.signinForm.get('password').value;
    console.log("signin requested for user " + username + " with password " + password);

    combineLatest(this.usersStoreFacade.getUserByCredentials(username, password),
      this.companiesStoreFacade.getCompanyByCredentials(username, password)).subscribe(
        ([student, company]) => {

          if (student && student.hasOwnProperty('username')) {
            // the observable fron user has returned a valid object, then login
            // as a student
            this.router.navigate(['admin', 'student', 'dashboard', student.id]);

          } else if (company && company.hasOwnProperty('username')) {
            // the observable fron company has returned a valid object, then login
            // as a company
            this.router.navigate(['admin', 'company', 'dashboard', company.id]);
          } else {
            this.router.navigate(['signup']);
            console.log('Login for user ' + username + ' has failed, unknown username or password');
          }
        }
      );
  }
  onNameValidation(validity: string) {
    this.isUsernameValid = (validity !== 'INVALID');
  }
  onPasswordValidation(validity: string) {
    this.isPasswordValid = (validity !== 'INVALID');
  }

}
