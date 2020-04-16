import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyOffersRoutingModule } from '@views/company-offers/company-offers-routing.module';
import { CompanyOffersComponent } from '@views/company-offers/company-offers.component';
import { CompanyOffersDetailsDialogComponent } from '@views/company-offers-details-dialog/company-offers-details-dialog.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromOffers from '@shared/state/offers';
import * as fromUsers from '@shared/state/user';
import * as fromCompanies from '@shared/state/company';
import { OffersEffects } from '@shared/state/offers/offers.effects';
import { UsersEffects } from '@shared/state/user/user.effects';
import { CompaniesEffects } from '@shared/state/company/company.effects';
import { environment } from '@environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OffersStoreFacade } from '@shared/state/offers/offers.store-facade';
import { OffersService } from '@shared/services/offers.service';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { StudentsService } from '@shared/services/students.service';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { CompaniesService } from '@shared/services/companies.service';

@NgModule({
  declarations: [CompanyOffersComponent, CompanyOffersDetailsDialogComponent],
  imports: [
    CommonModule,
    CompanyOffersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('offers', fromOffers.reducers),
    StoreModule.forFeature('users', fromUsers.reducers),
    StoreModule.forFeature('companies', fromCompanies.reducers),
    EffectsModule.forFeature([OffersEffects, UsersEffects, CompaniesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    OffersStoreFacade, OffersService,
    UsersStoreFacade, StudentsService,
    CompaniesStoreFacade, CompaniesService
  ],
  entryComponents: [
    CompanyOffersDetailsDialogComponent
  ]
})
export class CompanyOffersModule { }
