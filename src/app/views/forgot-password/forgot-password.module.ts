import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { SharedModule } from '@shared/shared.module';
import { UsersEffects } from '@shared/state/user/user.effects';
import { CompaniesEffects } from '@shared/state/company/company.effects';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { CompaniesStoreFacade } from '@shared/state/company/company.store-facade';
import { StudentsService } from '@shared/services/students.service';
import { CompaniesService } from '@shared/services/companies.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCompanies from '@shared/state/company';
import * as fromUsers from '@shared/state/user';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('users', fromUsers.reducers),
    StoreModule.forFeature('companies', fromCompanies.reducers),
    EffectsModule.forFeature([UsersEffects, CompaniesEffects]),
  ],
  providers: [
    UsersStoreFacade,
    StudentsService,
    CompaniesStoreFacade,
    CompaniesService
  ]
})
export class ForgotPasswordModule { }
