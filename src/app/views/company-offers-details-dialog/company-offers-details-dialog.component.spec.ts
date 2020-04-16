import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOffersDetailsDialogComponent } from './company-offers-details-dialog.component';

describe('CompanyOffersDetailsDialogComponent', () => {
  let component: CompanyOffersDetailsDialogComponent;
  let fixture: ComponentFixture<CompanyOffersDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOffersDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOffersDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
