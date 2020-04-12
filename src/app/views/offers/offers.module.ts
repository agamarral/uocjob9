import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersDetailsDialogComponent } from '@views/offers-details-dialog/offers-details-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromOffers from '@shared/state/offers';
import * as fromUsers from '@shared/state/user';
import { reducers } from 'app/reducers';
import { OffersEffects } from '@shared/state/offers/offers.effects';
import { UsersEffects } from '@shared/state/user/user.effects';
import { environment } from '@environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OffersStoreFacade } from '@shared/state/offers/offers.store-facade';
import { OffersService } from '@shared/services/offers.service';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { StudentsService } from '@shared/services/students.service';

@NgModule({
  declarations: [
    OffersComponent,
    OffersDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('offers', fromOffers.reducers),
    StoreModule.forFeature('users', fromUsers.reducers),
    EffectsModule.forFeature([OffersEffects, UsersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  exports: [
    OffersComponent
  ],
  providers: [
    OffersStoreFacade, OffersService, UsersStoreFacade, StudentsService
  ],
  entryComponents: [
    OffersDetailsDialogComponent
  ]
})

export class OffersModule { }