import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }
  goToProfile() {
    this.router.navigate(['admin', 'profile', this.id]);
  }
  goToOffers() {
    this.router.navigate(['admin', 'offers', this.id]);
  }
  goToMyOffers() {
    this.router.navigate(['admin', 'filtered', 'offers', this.id]);
  }

}
