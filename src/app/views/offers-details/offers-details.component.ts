import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Offer } from '@shared/models/offer.model';
import { OffersDetailsDialogComponent } from '../offers-details-dialog/offers-details-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentsService } from '../../shared/services/students.service';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.scss']
})

export class OffersDetailsComponent implements OnInit {
  jobOffers: Offer[] = [];
  username: string;
  isFiltered: boolean;

  offersDisplayedColumns: string[] = ['id', 'companyName', 'category', 'date', 'province'];

  constructor(private dialog: MatDialog, private studentsService: StudentsService) {

    console.log('offers is loaded');

    this.jobOffers.forEach((cur) => { cur.date = new Date(parseInt(cur.date) * 1000).toISOString().substr(0, 10) });
  }

  ngOnInit(): void {
  }
  viewOfferDetail(row) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.jobOffers.filter((cur) => cur.id === row.id)[0];
    dialogConfig.data['isFiltered'] = this.isFiltered;

    console.log(dialogConfig.data);
    const dialogRef = this.dialog.open(OffersDetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {

        if (data && !this.isFiltered) {
          // the student wants to get subscribed
          let selectedOffer = this.jobOffers.find((cur) => (cur.id == Number(data.id)));
          this.studentsService.subscribeStudentToOffer(this.username, selectedOffer);

        } else if (data && this.isFiltered) {
          // the student wants to remove subscription to the offer
          console.log(data);
          this.studentsService.unsubscribeStudentfromOffer(this.username, data.id);
          this.jobOffers = this.jobOffers.filter((offer) => offer.id !== data.id);
        }

      }
    );
  }
}
