import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyOffersComponent } from '@views/company-offers/company-offers.component';


const routes: Routes = [
  {
    path: "", component: CompanyOffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyOffersRoutingModule { }
