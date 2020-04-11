import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDetailsDialogComponent } from './offers-details-dialog.component';

describe('OffersDetailsDialogComponent', () => {
  let component: OffersDetailsDialogComponent;
  let fixture: ComponentFixture<OffersDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
