import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Experience } from '@shared/models/experience.model';
import { usernameValidator } from '../validators/username-validator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import moment from 'moment';

@Component({
  selector: 'app-work-experience-details-dialog',
  templateUrl: './work-experience-details-dialog.component.html',
  styleUrls: ['./work-experience-details-dialog.component.scss']
})
export class WorkExperienceDetailsDialogComponent implements OnInit {
  public experienceDetailsDlgForm: FormGroup;
  public currentExperience: Experience;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<WorkExperienceDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    const startdate = new Date(moment(data.startdate, 'DD/MM/YYYY').format('YYYY-MM-DD'));
    const enddate = new Date(moment(data.enddate, 'DD/MM/YYYY').format('YYYY-MM-DD'));

    this.experienceDetailsDlgForm = this.formBuilder.group({
      company: [data.company, [Validators.minLength(3), Validators.maxLength(255), usernameValidator]],
      position: [data.position, [Validators.minLength(3), Validators.maxLength(255), usernameValidator]],
      startdate: new FormControl(startdate, []),
      enddate: new FormControl(enddate, []),
      tasks: [data.tasks, Validators.required],
    });
    this.currentExperience = data;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.experienceDetailsDlgForm.value);
  }
}
