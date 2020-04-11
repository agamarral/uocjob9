import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetailsDialogComponent } from './language-details-dialog.component';

describe('LanguageDetailsDialogComponent', () => {
  let component: LanguageDetailsDialogComponent;
  let fixture: ComponentFixture<LanguageDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
