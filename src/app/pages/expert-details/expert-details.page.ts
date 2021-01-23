import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
import {
  IonSlides
} from '@ionic/angular';

@Component({
  selector: 'app-expert-details',
  templateUrl: './expert-details.page.html',
  styleUrls: ['./expert-details.page.scss'],
})
export class ExpertDetailsPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  constructor( private navCtrl: NavController) {}

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  onClick() {
   this.navCtrl.navigateForward('chat');
  }

}
