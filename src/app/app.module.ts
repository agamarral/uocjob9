import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from '@shared/services/fake-backend.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import { StoreModule } from '@ngrx/store';
//import { reducers, metaReducers } from './reducers';
import { userReducer } from '@shared/state/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';

//import { AvatarModule } from 'ngx-avatar';
//import { CountryPickerModule } from 'ngx-country-picker';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { enableTracing: false }),
    InMemoryWebApiModule.forRoot(FakeBackendService),
    //StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    /*     StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }), */
    StoreModule.forRoot(userReducer),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    AppComponent,

    //SigninComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
