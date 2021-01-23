import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Parametres',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Se deconnecter',
      url: '/login',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }
  dembow() {

  }
  initializeApp() {
    if (this.platform.is('android')) {
      this.statusBar.backgroundColorByHexString('#33000000');
    }
    this.platform.ready().then(() => {

    this.splashScreen.hide();
    });


  }


}
