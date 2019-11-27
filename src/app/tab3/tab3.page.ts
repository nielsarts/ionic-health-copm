import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public storage: Storage) {
    storage.ready().then(() => {
      this.storage.get('name').then((name) => {
        console.log('Me: Hey, ' + name + '! You have a very nice name.');
        console.log('You: Thanks! I got it for my birthday.');
      });
    });
  }



}
