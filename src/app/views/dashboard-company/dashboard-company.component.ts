import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.scss']
})
export class DashboardCompanyComponent implements OnInit {

  public id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }
  goToProfile() {
    this.router.navigate(['admin', 'company', 'profile', this.id]);
  }
  goToOffers() {
    this.router.navigate(['admin', 'company', 'offers', this.id]);
  }

}
