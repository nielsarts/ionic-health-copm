import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [GooglePlus]
})
export class Tab3Page {
  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  constructor(public storage: Storage, private googlePlus: GooglePlus, private router: Router) {
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

  logout() {
    this.googlePlus.logout()
        .then(res => {
          console.log(res);
          this.displayName = '';
          this.email = '';
          this.familyName = '';
          this.givenName = '';
          this.userId = '';
          this.imageUrl = '';
          this.router.navigate(['/']);
        })
        .catch(err => console.error(err));
  }

}
