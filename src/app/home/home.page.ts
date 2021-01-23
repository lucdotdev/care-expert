import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor( public navCtrl: NavController, public popoverController: PopoverController ) { }
  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event
    });
    return await popover.present();
  }


  ngOnInit() {
  }
  onClick() {
    this.navCtrl.navigateForward('expert');
  }
  onClick1() {
    this.navCtrl.navigateForward('carelib');
  }
  onClick2() {
    this.navCtrl.navigateForward('formation');
  }
}
