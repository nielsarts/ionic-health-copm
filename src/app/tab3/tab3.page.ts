import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  constructor(public storage: Storage) {
    storage.ready().then(() => {
      this.storage.get('displayName').then((displayName) => {
        this.displayName = displayName;
      });
      this.storage.get('email').then((email) => {
        this.email = email;
      });
      this.storage.get('familyName').then((familyName) => {
        this.familyName = familyName;
      });
      this.storage.get('givenName').then((givenName) => {
        this.givenName = givenName;
      });
      this.storage.get('userId').then((userId) => {
        this.userId = userId;
      });
      this.storage.get('imageUrl').then((imageUrl) => {
        this.imageUrl = imageUrl;
      });
    });
  }



}
