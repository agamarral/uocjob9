import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyDetailsDialogComponent } from './study-details-dialog.component';

describe('StudyDetailsDialogComponent', () => {
  let component: StudyDetailsDialogComponent;
  let fixture: ComponentFixture<StudyDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
