import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { PersonalDetailsDialogComponent } from '../personal-details-dialog/personal-details-dialog.component';
import { StudyDetailsComponent } from '../study-details/study-details.component';
import { StudyDetailsDialogComponent } from '../study-details-dialog/study-details-dialog.component';
import { LanguageDetailsDialogComponent } from '../language-details-dialog/language-details-dialog.component';
import { LanguageDetailsComponent } from '../language-details/language-details.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'app/reducers';
import { UsersEffects } from '@shared/state/user/user.effects';
import { environment } from '@environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { StudentsService } from '@shared/services/students.service';
import { WorkExperiencesComponent } from '@views/work-experiences/work-experiences.component';
import { WorkExperienceDetailsDialogComponent } from '@views/work-experience-details-dialog/work-experience-details-dialog.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalDetailsComponent,
    PersonalDetailsDialogComponent,
    StudyDetailsComponent,
    StudyDetailsDialogComponent,
    WorkExperiencesComponent,
    WorkExperienceDetailsDialogComponent,
    LanguageDetailsComponent,
    LanguageDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UsersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  exports: [
    ProfileComponent
  ],
  providers: [
    UsersStoreFacade, StudentsService

  ],
  entryComponents: [
    PersonalDetailsDialogComponent,
    StudyDetailsDialogComponent,
    WorkExperiencesComponent,
    LanguageDetailsDialogComponent
  ]
})


export class ProfileModule { }
