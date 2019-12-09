import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpmerkingPage } from './opmerking.page';

const routes: Routes = [
  {
    path: '',
    component: OpmerkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpmerkingPageRoutingModule {}
