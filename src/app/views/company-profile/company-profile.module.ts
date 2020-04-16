import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { CompanyProfileComponent } from './company-profile.component';
import { CompanyProfileDialogComponent } from '@views/company-profile-dialog/company-profile-dialog.component';
import * as fromCompanies from '@shared/state/company';
import { CompaniesEffects } from '@shared/state/company/company.effects';
import { environment } from '@environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { CompaniesService } from '@shared/services/companies.service';

@NgModule({
  declarations: [CompanyProfileComponent, CompanyProfileDialogComponent],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('companies', fromCompanies.reducers),
    EffectsModule.forFeature([CompaniesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    CompaniesStoreFacade,
    CompaniesService
  ],
  entryComponents: [
    CompanyProfileDialogComponent
  ]
})
export class CompanyProfileModule { }
