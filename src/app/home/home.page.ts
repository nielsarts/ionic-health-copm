import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  providers: [GooglePlus]
})
export class HomePage {

  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn:boolean = false;

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus, private router: Router, public storage: Storage) {

  }

  login() {
    this.googlePlus.login({})
        .then(res => {
          console.log(res);
          this.displayName = res.displayName;
          this.email = res.email;
          this.familyName = res.familyName;
          this.givenName = res.givenName;
          this.userId = res.userId;
          this.imageUrl = res.imageUrl;

          this.isLoggedIn = true;

          this.storage.ready().then(() => {
              this.storage.set('name', 'Mr. Ionitron');
          });

          this.router.navigate(['/tabs']);
        })
        .catch(err => console.error(err));
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

          this.isLoggedIn = false;
        })
        .catch(err => console.error(err));
  }
}
