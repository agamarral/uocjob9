import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '@shared/models/offer.model';
import { User } from '@shared/models/user.model';
import { Observable, merge, combineLatest } from 'rxjs';
import { OffersStoreFacade } from '@shared/state/offers/offers.store-facade';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OffersDetailsDialogComponent } from '@views/offers-details-dialog/offers-details-dialog.component';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers$: Observable<Offer[]> = this.offersStoreFacade.offers$;

  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStoreFacade.getUserById(id))
  );

  public isFiltered: boolean = false;
  public user: User;
  public jobOffers: Offer[] = [];
  public selectedOffer: number;
  public offersDisplayedColumns: string[] = ['id', 'companyName', 'category', 'date', 'province'];

  constructor(private offersStoreFacade: OffersStoreFacade, private usersStoreFacade: UsersStoreFacade,
    private route: ActivatedRoute, private dialog: MatDialog) {

    if (this.route.snapshot.data.title === 'Filtered Offers') {
      this.isFiltered = true;
    }
    console.log(this.isFiltered);
  }

  ngOnInit() {
    combineLatest(this.user$, this.offers$).subscribe(
      ([user, offers]) => {
        if (user.hasOwnProperty('name')) {
          this.user = user;
          if (this.isFiltered) {
            // Only these job offers to which the user is subscribed are shown
            this.jobOffers = offers.filter(offer => user.offers.find(offerId => offerId === offer.id));
          } else {
            // Only these job offers to which the user is NOT subscribed are shown
            this.jobOffers = offers.filter(offer => !user.offers.find(offerId => offerId === offer.id));
          }
        }
      }
    );
  }


  viewOfferDetail(row) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.selectedOffer = Number(row.id);

    dialogConfig.data = {
      'jobOffer': this.jobOffers.filter((cur) => cur.id === row.id)[0],
      'isFiltered': this.isFiltered
    }

    console.log(dialogConfig.data);
    const dialogRef = this.dialog.open(OffersDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        let newUser: Partial<User> = {};
        newUser.id = this.user.id;

        if (data && !this.isFiltered) {
          // the student wants to get subscribed
          newUser.offers = [this.selectedOffer];
          this.user.offers.map(of => newUser.offers.push(of));


        } else if (data && this.isFiltered) {
          // the student wants to remove subscription to the offer
          newUser.offers = this.user.offers.filter(offerId => offerId !== this.selectedOffer);
        }
        this.usersStoreFacade.updateUser(newUser);
      }
    );
  }

}
