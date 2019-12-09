import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopmPageRoutingModule } from './copm-routing.module';

import { CopmPage } from './copm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopmPageRoutingModule
  ],
  declarations: [CopmPage]
})
export class CopmPageModule {}
