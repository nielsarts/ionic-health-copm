import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopmPage } from './copm.page';

const routes: Routes = [
  {
    path: '',
    component: CopmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopmPageRoutingModule {}
