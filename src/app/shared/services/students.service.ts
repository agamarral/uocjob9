import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { User } from '../models/user.model';
import { Offer } from '../models/offer.model';
import { Study, VocationalStudy, CollegeStudy } from '../models/study.model';
import { Language } from '../models/language.model';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<User[]> {
    console.log('getStudents');
    return this.http.get<User[]>(AppSettings.API_ENDPOINT_USER);
  }
  createStudent(student: User): Observable<any> {
    console.log('createStudent');
    return this.http.post(AppSettings.API_ENDPOINT_USER, student);
  }

  updateStudent(student: Partial<User>): Observable<User> {
    console.log('updateStudent');
    return this.http.put<User>(AppSettings.API_ENDPOINT_USER, student);

  }
  removeStudent(id: number): Observable<User> {
    console.log('removeStudent');
    return this.http.delete<User>(`${AppSettings.API_ENDPOINT_USER}/${id}`);

  }
  subscribeStudentToOffer(username: string, offer: Offer) {
    // TODO: function to be improved with error handling
    this.http.get<User[]>(AppSettings.API_ENDPOINT_USER).subscribe(
      (users) => {
        let user = users.find((cur: any) => cur.username === username);
        user.offers.push(offer.id);
        console.log("User " + username + " has been subscribed to offer " + offer.id);
        this.http.put<User>(AppSettings.API_ENDPOINT_USER, user);
      }
    )
  }
  unsubscribeStudentfromOffer(username: string, offerId: number) {
    // TODO: function to be improved with error handling
    this.http.get<User[]>(AppSettings.API_ENDPOINT_USER).subscribe(
      (users) => {
        let user = users.find((cur: any) => cur.username === username);

        user.offers = user.offers.filter((id) => id !== offerId);

        console.log("User " + username + " has been unsubscribed from offer " + offerId);
        this.http.put<User>(AppSettings.API_ENDPOINT_USER, user);
      }
    )
  }
}