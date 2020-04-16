import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DashboardCompanyRoutingModule } from './dashboard-company-routing.module';
import { DashboardCompanyComponent } from '@views/dashboard-company/dashboard-company.component';


@NgModule({
  declarations: [
    DashboardCompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardCompanyRoutingModule
  ]
})
export class DashboardCompanyModule { }
