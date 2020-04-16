import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileDialogComponent } from './company-profile-dialog.component';

describe('CompanyProfileDialogComponent', () => {
  let component: CompanyProfileDialogComponent;
  let fixture: ComponentFixture<CompanyProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
