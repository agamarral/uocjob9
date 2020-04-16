import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TitleStudy } from '@shared/models/study.model';

@Component({
  selector: 'app-offers-details-dialog',
  templateUrl: './offers-details-dialog.component.html',
  styleUrls: ['./offers-details-dialog.component.scss']
})
export class OffersDetailsDialogComponent implements OnInit {
  public offersDetailsDlgForm: FormGroup;
  public titleDisplayedColumns: string[] = ['titleName'];
  public titles: TitleStudy[];
  public showRemoveButton: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<OffersDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {


    this.offersDetailsDlgForm = this.formBuilder.group({
      company: [data.jobOffer.company.name, Validators.required],
      position: [data.jobOffer.job.name, Validators.required],
      jobDescription: [data.jobOffer.job.description, Validators.required],
      province: [data.jobOffer.province.name, Validators.required],
      town: [data.jobOffer.municipe.name, Validators.required],
      jobCategory: [data.jobOffer.category.name, Validators.required]
    });
    this.titles = data.jobOffer.title;
    this.showRemoveButton = data.isFiltered;
    console.log('Is filtered ' + this.showRemoveButton);

  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
  apply() {
    this.dialogRef.close(this.offersDetailsDlgForm.value);
  }

}
