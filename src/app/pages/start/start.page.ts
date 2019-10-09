import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private navCtrl: NavController) { }

onClick() {
  this.navCtrl.navigateForward('/login');
  }
onClick1() {
    this.navCtrl.navigateForward('/signup');
  }

ngOnInit() {
  }

}
