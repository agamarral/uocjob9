import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '@shared/services/profile.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  public signinForm: FormGroup;
  public isUsernameValid: boolean = true;
  public isPasswordValid: boolean = true;

  constructor(private fb: FormBuilder, private profileSvc: ProfileService, private router: Router) {

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
    this.profileSvc.login(username, password);
  }
  onNameValidation(validity: string) {
    this.isUsernameValid = (validity !== 'INVALID');
  }
  onPasswordValidation(validity: string) {
    this.isPasswordValid = (validity !== 'INVALID');
  }

}
