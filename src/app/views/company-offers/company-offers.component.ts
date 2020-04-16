import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '@shared/models/offer.model';
import { Company } from '@shared/models/company.model';
import { Observable, combineLatest } from 'rxjs';
import { OffersStoreFacade } from '@shared/state/offers/offers.store-facade';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CompanyOffersDetailsDialogComponent } from '@views/company-offers-details-dialog/company-offers-details-dialog.component';
import moment from 'moment';

@Component({
  selector: 'app-company-offers',
  templateUrl: './company-offers.component.html',
  styleUrls: ['./company-offers.component.scss']
})
export class CompanyOffersComponent implements OnInit {

  offers$: Observable<Offer[]> = this.offersStoreFacade.offers$;

  company$: Observable<Company> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.companiesStoreFacade.getCompanyById(id))
  );

  public company = <Company>{};
  public jobOffers: Offer[];
  public selectedOffer: Offer;
  public offersDisplayedColumns: string[] = ['companyName', 'category', 'date', 'province', 'actions'];
  public nextOfferId: number;

  constructor(private offersStoreFacade: OffersStoreFacade, private companiesStoreFacade: CompaniesStoreFacade,
    private route: ActivatedRoute, private dialog: MatDialog) {
    combineLatest(this.company$, this.offers$).subscribe(

      ([company, offers]) => {
        if (company != undefined) {
          console.log('combineLatest');
          console.log(company);
          console.log(this.company);
          console.log(offers);
          this.company = company;

          if (offers.length > 0 && this.company.offers != undefined) {

            this.jobOffers = offers.filter(offer => this.company.offers.includes(offer.id));
            console.log(this.jobOffers);
            // sets the id for an eventual new offer
            this.nextOfferId = offers.map((value) => value.id).reduce((total, cur) => { return cur > total ? cur : total }) + 1;
          }
        }
      }
    );
  }

  ngOnInit(): void {

  }
  createNew() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.selectedOffer = {
      id: this.nextOfferId,
      company: { uid: this.company.id, name: this.company.company },
      job: {
        uid: 0, name: '',
        description: ''
      },
      province: { uid: 0, name: '' },
      municipe: { uid: 0, name: '' },
      category: { uid: 0, name: '' },
      date: moment().format('YYYY-MM-DD'),
      title: [],
      users: []
    }
    dialogConfig.data = this.selectedOffer;


    const dialogRef = this.dialog.open(CompanyOffersDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          // first of all, we create new offer
          let newOffer = <Offer>{};
          Object.assign(newOffer, data);
          this.offersStoreFacade.addOffer(newOffer);

          // then we update the list of offers of the company 
          let newCompany: Partial<Company> = {};
          newCompany.id = this.company.id;
          newCompany.offers = [];
          this.company.offers.map(of => newCompany.offers.push(of));
          newCompany.offers.push(this.selectedOffer.id);
          this.companiesStoreFacade.updateCompany(newCompany);

          this.nextOfferId += 1;
        }
      });
  }
  edit(element, idx) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.selectedOffer = this.jobOffers[idx];

    dialogConfig.data = element;

    console.log(dialogConfig.data);
    const dialogRef = this.dialog.open(CompanyOffersDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {

        if (data) {
          // first of all, we update the offer
          let newOffer: Partial<Offer> = {};
          Object.assign(newOffer, data);
          newOffer.id = this.selectedOffer.id;
          this.offersStoreFacade.updateOffer(newOffer);
        }
      });
  }


  cancelOrDelete(idx) {

    this.selectedOffer = this.jobOffers[idx];

    let newCompany: Partial<Company> = {};
    newCompany.id = this.company.id;
    newCompany.offers = this.company.offers.filter(of => of != this.selectedOffer.id);
    this.companiesStoreFacade.updateCompany(newCompany);

  }
}

