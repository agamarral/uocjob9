import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as cfgsdata from '@assets/jsondata/CFGStitles.json';
import * as cfgsies from '@assets/jsondata/CFGSinstitutions.json';
import { UploadService } from '@shared/services/upload.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CollegeStudy, VocationalStudy, TitlewGrade, Institution, Category, Grade } from '@shared/models/study.model';
import { DateAdapter } from '@angular/material/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-study-details-dialog',
  templateUrl: './study-details-dialog.component.html',
  styleUrls: ['./study-details-dialog.component.scss']
})
export class StudyDetailsDialogComponent implements OnInit {
  public studyDetailsDlgForm: FormGroup;
  public selectedStudy: CollegeStudy | VocationalStudy;

  public displayCFGS: boolean;
  public displayCollege: boolean;

  public file: any;

  public institutionList: Institution[] = [];
  public CFGSTitleList: TitlewGrade[] = [];
  public categoryList: Category[] = [];
  public institutionListNames: string[] = [];
  public CFGSTitleListNames: string[] = [];
  public categoryListNames: string[] = [];
  public gradeList: Grade[] = [{ uid: 1, name: 'basic' }, { uid: 2, name: 'middle' }, { uid: 3, name: 'superior' }];

  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('fileUpload_cfgs', { static: false }) fileUpload_cfgs: ElementRef;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService, private dateAdapter: DateAdapter<Moment>,
    private dialogRef: MatDialogRef<StudyDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {


    this.file = [];
    this.selectedStudy = data;


    if (data.hasOwnProperty('level') && data.level.uid == 2) {
      // college studies
      this.initialize_college(data);

    } else if (data.hasOwnProperty('level') && data.level.uid == 1) {
      // Vocational studies
      this.initialize_cfgs(data);

    } else {
      // new & undefined study
      this.initialize_undefined();

    }
  }

  ngOnInit(): void {

  }
  initialize_cfgs(data: any) {

    this.displayCFGS = true;
    this.displayCollege = false;
    const startdate = new Date(data.date);

    this.initializeCfgsLists();

    this.updateTitleList(data.category.name, data.grade.name);

    this.studyDetailsDlgForm = this.formBuilder.group({

      level: [data.level.name, Validators.required],
      institution: ['', Validators.required],
      titleName: ['', Validators.required],
      date: new FormControl('', []),
      bilingue: [false, Validators.required],
      institution_cfgs: [data.institution.name, Validators.required],
      jobCategory: [data.category.name, Validators.required],
      gradeLevel: [data.grade.name, Validators.required],
      titleName_cfgs: [data.title.name, Validators.required],
      date_cfgs: new FormControl(startdate, []),
      dual: [data.dual, Validators.required],
      bilingue_cfgs: [data.bilingue, Validators.required]
    });
    this.studyDetailsDlgForm.get('level').setValue('CFGS');
    this.studyDetailsDlgForm.get('institution_cfgs').setValue(data.institution.name);
    this.studyDetailsDlgForm.get('jobCategory').setValue(data.category.name);
    this.studyDetailsDlgForm.get('gradeLevel').setValue(data.grade.name);
    this.studyDetailsDlgForm.get('titleName_cfgs').setValue(data.title.name);
  }
  initialize_college(data: any) {

    const startdate = new Date(data.date);
    this.displayCFGS = false;
    this.displayCollege = true;

    this.studyDetailsDlgForm = this.formBuilder.group({

      level: [data.level.name, Validators.required],
      institution: [data.institution, Validators.required],
      titleName: [data.title.name, Validators.required],
      date: new FormControl(startdate, []),
      bilingue: [data.bilingue, Validators.required],
      institution_cfgs: ['', Validators.required],
      jobCategory: ['', Validators.required],
      gradeLevel: ['', Validators.required],
      titleName_cfgs: ['', Validators.required],
      date_cfgs: new FormControl('', []),
      dual: [false, Validators.required],
      bilingue_cfgs: [false, Validators.required]
    });
    this.studyDetailsDlgForm.get('level').setValue('college');
    this.studyDetailsDlgForm.get('institution_cfgs').setValue(data.institution.name);
    this.studyDetailsDlgForm.get('jobCategory').setValue(data.category.name);
    this.studyDetailsDlgForm.get('gradeLevel').setValue(data.grade.name);
    this.studyDetailsDlgForm.get('titleName_cfgs').setValue(data.title.name);
  }
  initialize_undefined() {

    this.selectedStudy.uid = -1;
    // study to be defined from scratch
    this.studyDetailsDlgForm = this.formBuilder.group({

      level: ['', Validators.required],
      institution: ['', Validators.required],
      titleName: ['', Validators.required],
      date: new FormControl('', []),
      bilingue: [false, Validators.required],
      institution_cfgs: ['', Validators.required],
      jobCategory: ['', Validators.required],
      gradeLevel: ['', Validators.required],
      titleName_cfgs: ['', Validators.required],
      date_cfgs: new FormControl('', []),
      dual: ['', Validators.required],
      bilingue_cfgs: ['', Validators.required]
    });
  }
  uploadFile() {

    const formData = new FormData();
    console.log("uploadFile" + this.file);
    formData.append('file', this.file.data);
    this.file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.file.inProgress = false;
        return of(`${this.file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }
  onClick() {
    let file2upload;
    if (this.displayCFGS) {
      file2upload = this.fileUpload_cfgs.nativeElement;
    } else {
      file2upload = this.fileUpload.nativeElement;
    }

    file2upload.onchange = () => {
      this.file = { data: file2upload.files[0], inProgress: false, progress: 0 };
      console.log(this.file);
      this.uploadFile();
    }
    file2upload.click();
  }
  close() {
    this.dialogRef.close();
  }
  save() {

    if (this.studyDetailsDlgForm.get('level').value === 'college') {

      let collegeStudy = <CollegeStudy>{};
      //college
      collegeStudy.uid = this.selectedStudy.uid;
      collegeStudy.level = { uid: 2, name: 'Ciclo universitario' };
      collegeStudy.title = { uid: 1, name: this.studyDetailsDlgForm.get('titleName').value };
      collegeStudy.institution = this.studyDetailsDlgForm.get('institution').value;
      collegeStudy.bilingue = this.studyDetailsDlgForm.get('bilingue').value;
      collegeStudy.date = this.dateAdapter.format(this.studyDetailsDlgForm.get('date').value, "dd/MM/yyyy");
      this.selectedStudy = collegeStudy;

    } else {

      let cfgsStudy = <VocationalStudy>{};
      cfgsStudy.uid = this.selectedStudy.uid;
      cfgsStudy.level = { uid: 1, name: 'Ciclo formativo' };
      let title = this.CFGSTitleList.find((value) => value.name === this.studyDetailsDlgForm.get('titleName_cfgs').value);
      cfgsStudy.title = { name: title.name, uid: title.uid };
      cfgsStudy.grade = this.gradeList.find((value) => value.name === title.gradeLevel);

      cfgsStudy.institution = this.institutionList.find((insti) => insti.name === this.studyDetailsDlgForm.get('institution_cfgs').value);
      cfgsStudy.bilingue = this.studyDetailsDlgForm.get('bilingue_cfgs').value;
      //cfgsStudy.date = this.dateAdapter.format(this.studyDetailsDlgForm.get('date_cfgs').value, "dd/MM/yyyy");
      cfgsStudy.category = this.categoryList.find((cat) => cat.name === this.studyDetailsDlgForm.get('jobCategory').value);
      cfgsStudy.dual = this.studyDetailsDlgForm.get('dual').value;
      this.selectedStudy = cfgsStudy;
    }
    this.dialogRef.close(this.selectedStudy);
  }
  initializeCfgsLists() {

    cfgsdata['default'].forEach((value) => {
      this.categoryList.push(value.category);
      this.categoryListNames.push(value.category.name);
    });
    cfgsies['default'].forEach((value) => {
      this.institutionList.push(value);
      this.institutionListNames.push(value.name)
    });
  }
  updateTitleList(categoryName, gradeLevel) {

    let categoryObj = cfgsdata['default'].find((cur) => cur.category.name === categoryName);
    this.CFGSTitleList = categoryObj['titles'].filter((cur) => cur.gradeLevel === gradeLevel);
    this.CFGSTitleListNames = this.CFGSTitleList.map((cur) => cur.name);
  }
  changeTitle() {
    let categoryName = this.studyDetailsDlgForm.get('jobCategory').value;
    let gradeLevel = this.studyDetailsDlgForm.get('gradeLevel').value;
    this.updateTitleList(categoryName, gradeLevel);
  }
  changeTitleType() {
    if (this.studyDetailsDlgForm.get('level').value === 'CFGS') {
      // Vocational studies
      this.displayCFGS = true;
      this.displayCollege = false;
      this.initializeCfgsLists();

    } else {
      // College studies
      this.displayCFGS = false;
      this.displayCollege = true;
    }

  }

}
