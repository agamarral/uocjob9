import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsDialogComponent } from './personal-details-dialog.component';

describe('PersonalDetailsDialogComponent', () => {
  let component: PersonalDetailsDialogComponent;
  let fixture: ComponentFixture<PersonalDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
