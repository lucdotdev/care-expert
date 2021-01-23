import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {


  constructor(private navCtrl: NavController, public storage: Storage) { }

onClick() {
  this.navCtrl.navigateForward('/login');
  }
onClick1() {
    this.navCtrl.navigateForward('/signup');
  }
  ionViewDidLoad() {
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.navCtrl.navigateRoot('slide');
      }
    });
  }

ngOnInit() {
  }

}
