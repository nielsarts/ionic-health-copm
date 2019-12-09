import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelangrijkheidPage } from './belangrijkheid.page';

const routes: Routes = [
  {
    path: '',
    component: BelangrijkheidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelangrijkheidPageRoutingModule {}
