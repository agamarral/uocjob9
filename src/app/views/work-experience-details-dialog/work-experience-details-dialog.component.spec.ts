import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceDetailsDialogComponent } from './work-experience-details-dialog.component';

describe('WorkExperienceDetailsDialogComponent', () => {
  let component: WorkExperienceDetailsDialogComponent;
  let fixture: ComponentFixture<WorkExperienceDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
