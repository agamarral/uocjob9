import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class ProfileService {
  constructor(
    private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {

    console.log("login requested for user " + username + " with password " + password);

    this.http.get<User[]>(AppSettings.API_ENDPOINT_USER).subscribe(
      (users) => {
        let user = users.find((cur) => (cur.password === password && cur.username === username));
        if (user) {
          this.router.navigate(['admin', 'dashboard', user.id]);
        } else {
          this.router.navigate(['signup']);
          console.log('Login for user ' + username + ' has failed, unknown username or password');
        }
      }, (err) => {
        console.log('Login for user ' + username + ' has failed ' + ' with error ' + err);
        this.router.navigate(['signup']);
      });
  }
}
