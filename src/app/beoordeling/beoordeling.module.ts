import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeoordelingPageRoutingModule } from './beoordeling-routing.module';

import { BeoordelingPage } from './beoordeling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeoordelingPageRoutingModule
  ],
  declarations: [BeoordelingPage]
})
export class BeoordelingPageModule {}
