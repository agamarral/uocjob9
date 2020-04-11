import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersDetailsComponent } from '@views/offers-details/offers-details.component';
import { OffersDetailsDialogComponent } from '@views/offers-details-dialog/offers-details-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'app/reducers';
import { OffersEffects } from '@shared/state/offers/offers.effects';
import { environment } from '@environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OffersStoreFacade } from '@shared/state/offers/offers.store-facade';
import { OffersService } from '@shared/services/offers.service';

@NgModule({
  declarations: [
    OffersComponent,
    OffersDetailsComponent,
    OffersDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('offers', reducers),
    EffectsModule.forFeature([OffersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  exports: [
    OffersComponent
  ],
  providers: [
    OffersStoreFacade, OffersService
  ],
  entryComponents: [
    OffersDetailsDialogComponent
  ]
})

export class OffersModule { }