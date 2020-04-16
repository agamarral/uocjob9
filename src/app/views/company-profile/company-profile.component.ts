import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CompanyProfileDialogComponent } from '@views/company-profile-dialog/company-profile-dialog.component'
import { Company } from '@shared/models/company.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  company$: Observable<Company> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.companiesStoreFacade.getCompanyById(id))
  );
  public isReadOnly = false;
  public company: Company;

  constructor(private dialog: MatDialog, private companiesStoreFacade: CompaniesStoreFacade, private route: ActivatedRoute) {
    this.company$.subscribe(

      (value) => {

        if (!value) {
          this.initialize_company();
        } else {
          this.isReadOnly = false;
          this.company = value;
          this.isReadOnly = true;
        }

      }
    );
  }

  ngOnInit(): void {

  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.company;

    const dialogRef = this.dialog.open(CompanyProfileDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) =>
      console.log('closing dialog')
    );

  }
  initialize_company() {
    this.company = {
      id: -1,
      username: '',
      password: '',
      brand: '',
      company: '',
      cif: '',
      url: '',
      address: {
        street: '',
        province: {
          name: '',
          uid: 0
        },
        municipe: {
          name: '',
          uid: 0
        }
      },
      contact: {
        name: '',
        surname: '',
        phone: '',
        email: ''
      },
      offers: []
    }
  }
}
