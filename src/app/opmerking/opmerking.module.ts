import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpmerkingPageRoutingModule } from './opmerking-routing.module';

import { OpmerkingPage } from './opmerking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpmerkingPageRoutingModule
  ],
  declarations: [OpmerkingPage]
})
export class OpmerkingPageModule {}
