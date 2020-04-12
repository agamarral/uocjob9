import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Experience } from '@shared/models/experience.model';
import { usernameValidator } from '../validators/username-validator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-work-experience-details-dialog',
  templateUrl: './work-experience-details-dialog.component.html',
  styleUrls: ['./work-experience-details-dialog.component.scss']
})
export class WorkExperienceDetailsDialogComponent implements OnInit {
  public experienceDetailsDlgForm: FormGroup;
  public currentExperience: Experience;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<WorkExperienceDetailsDialogComponent>,
    private dateAdapter: DateAdapter<Moment>, @Inject(MAT_DIALOG_DATA) data) {

    const startdate = new Date(data.startdate);
    const enddate = new Date(data.enddate);

    this.experienceDetailsDlgForm = this.formBuilder.group({
      company: [data.company, [Validators.minLength(3), Validators.maxLength(255), usernameValidator]],
      position: [data.position, [Validators.minLength(3), Validators.maxLength(255), usernameValidator]],
      startdate: new FormControl(data.startdate, []),
      enddate: new FormControl(data.startdate, []),
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

    //lang.date = this.dateAdapter.format(this.languageDetailsDlgForm.get('date').value, "dd/MM/yyyy");

    this.dialogRef.close(this.experienceDetailsDlgForm.value);
  }
}
