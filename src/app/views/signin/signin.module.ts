import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '@shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
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

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('users', fromUsers.reducers),
    StoreModule.forFeature('companies', fromCompanies.reducers),
    EffectsModule.forFeature([UsersEffects, CompaniesEffects]),
  ],
  providers: [

    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    },
    UsersStoreFacade,
    StudentsService,
    CompaniesStoreFacade,
    CompaniesService
  ]
})
export class SigninModule { }
