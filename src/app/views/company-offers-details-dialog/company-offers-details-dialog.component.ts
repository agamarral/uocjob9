import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TitleStudy } from '@shared/models/study.model';
import { Offer } from '@shared/models/offer.model';
import { User } from '@shared/models/user.model';
import * as towndata from '@assets/jsondata/munic.json';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';


@Component({
  selector: 'app-company-offers-details-dialog',
  templateUrl: './company-offers-details-dialog.component.html',
  styleUrls: ['./company-offers-details-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyOffersDetailsDialogComponent implements OnInit {
  public offersDetailsDlgForm: FormGroup;
  public titles: TitleStudy[];
  public currentOffer: Offer;
  public selectedProvince: string;
  public provinceList: string[] = [];
  public townList: string[] = [];
  public candidates: User[] = [];

  public candidatesDisplayedColumns: string[] = ['candidateName', 'candidateSurname', 'actions'];

  constructor(private formBuilder: FormBuilder, private usersStoreFacade: UsersStoreFacade,
    private dialogRef: MatDialogRef<CompanyOffersDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.currentOffer = data;

    this.currentOffer.users.map(userid =>
      this.usersStoreFacade.getUserById(userid).subscribe(
        (user) => this.candidates.push(user)
      ))

    towndata['default'].forEach((value) => { this.provinceList.push(value.name) });
    if (data.province.name != "") {
      // no new dialog
      this.updateTownList(data.province.name);
      this.offersDetailsDlgForm = this.formBuilder.group({
        company: [data.company.name, Validators.required],
        position: [data.job.name, Validators.required],
        jobDescription: [data.job.description, Validators.required],
        province: [data.province.name, Validators.required],
        town: [data.municipe.name, Validators.required],
        jobCategory: [data.category.name, Validators.required],
        title: [data.title[0].name, Validators.required]
      });
    } else {
      this.offersDetailsDlgForm = this.formBuilder.group({
        company: [data.company.name, Validators.required],
        position: [data.job.name, Validators.required],
        jobDescription: [data.job.description, Validators.required],
        province: [data.province.name, Validators.required],
        town: [data.municipe.name, Validators.required],
        jobCategory: [data.category.name, Validators.required],
        title: ['', Validators.required]
      });
    }



    this.titles = data.title;
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
  apply() {

    let provObj = towndata['default'].find((cur) => cur.name === this.offersDetailsDlgForm.get('province').value);
    let townObj = provObj['towns'].find((cur) => cur.name === this.offersDetailsDlgForm.get('town').value);

    let newOffer = <Offer>{};

    Object.assign(this.currentOffer);
    newOffer.province = { uid: provObj.uid, name: provObj.name };
    newOffer.municipe = townObj;
    newOffer.job = {
      uid: 0,
      name: this.offersDetailsDlgForm.get('position').value,
      description: this.offersDetailsDlgForm.get('jobDescription').value
    };
    newOffer.category = { uid: 0, name: this.offersDetailsDlgForm.get('jobCategory').value };
    newOffer.title = [];
    newOffer.title.push({ uid: 0, name: this.offersDetailsDlgForm.get('title').value });

    this.dialogRef.close(newOffer);
  }

  updateTownList(provinceName) {
    let provObj = towndata['default'].find((cur) => cur.name === provinceName);
    this.townList = [];
    provObj['towns'].forEach((value) => { this.townList.push(value.name) });
  }

  changeTown() {
    let provinceName = this.offersDetailsDlgForm.get('province').value;
    this.updateTownList(provinceName);
  }
  selectCandidate(element) {
    console.log("candidate " + element.candidateName + " " + element.candidateSurname + " has been selected");
  }
  discardCandidate(element) {
    console.log("candidate " + element.candidateName + " " + element.candidateSurname + " has been discarded");
  }
}
