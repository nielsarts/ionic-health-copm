import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-opmerking',
  templateUrl: './opmerking.page.html',
  styleUrls: ['./opmerking.page.scss'],
})
export class OpmerkingPage implements OnInit {
  opmerking: String;

  constructor(public storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  public save() {
    this.storage.ready().then(() => {
      this.storage.set('opmerking', this.opmerking);
      this.router.navigate(['/tabs/tab1']);
    });
  }

}
