import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersDetailsComponent } from '../offers-details/offers-details.component';
import { OffersService } from '../../shared/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @ViewChild(OffersDetailsComponent)
  offers: OffersDetailsComponent;

  public username: string;
  public isFiltered: boolean = false;

  constructor(private offersService: OffersService, private route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username');

    if (this.route.snapshot.data.title === 'Filtered Offers') {
      this.isFiltered = true;
    }
    console.log(this.isFiltered);
  }

  ngOnInit() {

    this.offersService.getOffers().subscribe(
      (offers) => {
        this.offers.jobOffers = offers;
        this.offers.username = this.username;
        this.offers.isFiltered = this.isFiltered;
      }
    );
  }
}