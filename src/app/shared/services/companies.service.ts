import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Company } from '@shared/models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    console.log('getCompanies');
    return this.http.get<Company[]>(AppSettings.API_ENDPOINT_COMPANIES);
  }
  createCompany(company: Company): Observable<any> {
    console.log('createCompany');
    return this.http.post(AppSettings.API_ENDPOINT_COMPANIES, company);
  }

  updateCompany(company: Partial<Company>): Observable<Company> {
    console.log('updateCompany');
    return this.http.put<Company>(AppSettings.API_ENDPOINT_COMPANIES, company);

  }
  removeCompany(id: number): Observable<Company> {
    console.log('removeCompany');
    return this.http.delete<Company>(`${AppSettings.API_ENDPOINT_COMPANIES}/${id}`);

  }
}