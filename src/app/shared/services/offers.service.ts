import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {

    return this.http.get<Offer[]>(AppSettings.API_ENDPOINT_OFFERS);
  }
  createOffer(offer: Offer): Observable<any> {
    return this.http.post<Offer>(AppSettings.API_ENDPOINT_OFFERS, offer);
  }
  updateOffer(offer: Partial<Offer>): Observable<Offer> {
    return this.http.put<Offer>(AppSettings.API_ENDPOINT_OFFERS, offer);
  }
  removeOffer(offerId: number): Observable<Offer> {
    return this.http.delete<Offer>(`${AppSettings.API_ENDPOINT_OFFERS}/${offerId}`);
  }
}




