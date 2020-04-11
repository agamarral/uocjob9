import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offers-details-dialog',
  templateUrl: './offers-details-dialog.component.html',
  styleUrls: ['./offers-details-dialog.component.scss']
})
export class OffersDetailsDialogComponent implements OnInit {
  public offersDetailsDlgForm: FormGroup;
  public titleDisplayedColumns: string[] = ['titleName'];
  public dataSource: Title[];
  public showRemoveButton: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<OffersDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {


    this.offersDetailsDlgForm = this.formBuilder.group({
      id: [{ value: data.id, disabled: false }, null],
      company: [data.company.name, Validators.required],
      position: [data.job.name, Validators.required],
      jobDescription: [data.job.description, Validators.required],
      province: [data.province.name, Validators.required],
      town: [data.municipe.name, Validators.required],
      jobCategory: [data.category.name, Validators.required]
    });
    this.dataSource = data.title;
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
