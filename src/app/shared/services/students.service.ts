import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { User } from '@shared/models/user.model';

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
}