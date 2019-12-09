import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beoordeling',
  templateUrl: './beoordeling.page.html',
  styleUrls: ['./beoordeling.page.scss'],
})
export class BeoordelingPage implements OnInit {
  top5 = [];
  beoordeling = [
    {
    },
    {
    },
    {
    },
    {
    },
    {
    }
  ];

  constructor(public storage: Storage, private router: Router) {
    storage.ready().then(() => {
      this.storage.get('top5').then((value) => {
        this.top5 = value;
      });
    });
  }

  ngOnInit() {
  }

  public save() {
    this.storage.ready().then(() => {
      this.storage.set('beoordeling', this.beoordeling);
      this.router.navigate(['/opmerking']);
    });
  }
}
