import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-copm',
  templateUrl: './copm.page.html',
  styleUrls: ['./copm.page.scss'],
})
export class CopmPage implements OnInit {
  persoonlijk = {};

  zelfzorg = [
    {}
  ];
  productiviteit = [
    {}
  ];
  vrijeTijd = [
    {}
  ];

  constructor(public storage: Storage, private router: Router) {
    storage.ready().then(() => {
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
    });
  }

  ngOnInit() {
  }
  public addItemZelfzorg() {
    this.zelfzorg.push({});
  }
  public addItemProductiviteit() {
    this.productiviteit.push({});
  }
  public addItemVrijeTijd() {
    this.vrijeTijd.push({});
  }
  public removeItemZelfzorg() {
    this.zelfzorg.pop();
  }
  public removeItemProductiviteit() {
    this.productiviteit.pop();
  }
  public removeItemVrijeTijd() {
    this.vrijeTijd.pop();
  }

  public clean() {
    this.persoonlijk = {};

    this.zelfzorg = [
      {}
    ];
    this.productiviteit = [
      {}
    ];
    this.vrijeTijd = [
      {}
    ];  }

  public opslaan() {
    this.storage.ready().then(() => {
      this.storage.set('persoonlijk', this.persoonlijk);
      this.storage.set('zelfzorg', this.zelfzorg);
      this.storage.set('productiviteit', this.productiviteit);
      this.storage.set('vrijeTijd', this.vrijeTijd);
      this.router.navigate(['/belangrijkheid']);
    });

  }
}
