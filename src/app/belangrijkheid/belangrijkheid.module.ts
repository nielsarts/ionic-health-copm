import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelangrijkheidPageRoutingModule } from './belangrijkheid-routing.module';

import { BelangrijkheidPage } from './belangrijkheid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BelangrijkheidPageRoutingModule
  ],
  declarations: [BelangrijkheidPage]
})
export class BelangrijkheidPageModule {}
