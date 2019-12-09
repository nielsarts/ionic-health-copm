import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-belangrijkheid',
  templateUrl: './belangrijkheid.page.html',
  styleUrls: ['./belangrijkheid.page.scss'],
})
export class BelangrijkheidPage implements OnInit {
  zelfzorg = [
    {}
  ];
  productiviteit = [
    {}
  ];
  vrijeTijd = [
    {}
  ];

  activiteiten = [];

  constructor(public storage: Storage, private router: Router) {
    storage.ready().then(() => {
      this.storage.get('zelfzorg').then((value) => {
        for(let item of value) {
          this.activiteiten.push(item);
        }
      });
      this.storage.get('productiviteit').then((value) => {
        for(let item of value) {
          this.activiteiten.push(item);
        }
      });
      this.storage.get('vrijeTijd').then((value) => {
        for(let item of value) {
          this.activiteiten.push(item);
        }
      });
    });
  }

  ngOnInit() {
  }

  public onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    let draggedItem = this.activiteiten.splice(event.detail.from,1)[0];
    this.activiteiten.splice(event.detail.to,0,draggedItem)
    //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
    event.detail.complete();
  }

  public getList() {
    console.table(this.activiteiten);
    var top5 = [];
    for(let i = 0; i < 5; i++) {
      if(this.activiteiten[i] != null){
        top5.push(this.activiteiten[i]);
      }
    }
    this.storage.ready().then(() => {
      this.storage.set('top5', top5);
      // this.storage.get('top5').then((value) => {
      //   console.log(value);
      // });
      this.router.navigate(['/beoordeling']);
    });
  }


}
