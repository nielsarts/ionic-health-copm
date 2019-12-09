import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  persoonlijk = {};
  zelfzorg: any;
  productiviteit: any;
  vrijeTijd: any;
  top5: any;
  beoordeling: any;
  opmerking: any;

  constructor(public storage: Storage) {
    this.storage.get('persoonlijk').then((value) => {
      this.persoonlijk = value;
    });
    this.storage.get('zelfzorg').then((value) => {
      this.zelfzorg = value;
    });
    this.storage.get('productiviteit').then((value) => {
      this.productiviteit = value;
    });
    this.storage.get('vrijeTijd').then((value) => {
      this.vrijeTijd = value;
    });
    this.storage.get('top5').then((value) => {
      this.top5 = value;
    });
    this.storage.get('beoordeling').then((value) => {
      this.beoordeling = value;
    });
    this.storage.get('opmerking').then((value) => {
      this.opmerking = value;
    });
  }

}
