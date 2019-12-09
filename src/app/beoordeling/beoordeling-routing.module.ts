import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeoordelingPage } from './beoordeling.page';

const routes: Routes = [
  {
    path: '',
    component: BeoordelingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeoordelingPageRoutingModule {}
