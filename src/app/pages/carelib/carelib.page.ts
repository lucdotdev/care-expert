import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carelib',
  templateUrl: './carelib.page.html',
  styleUrls: ['./carelib.page.scss'],
})
export class CarelibPage implements OnInit {
  livres = [
    {
      nom : 'la rousse medical',
      image : '../../../assets/carelib/Laroue-medical.jpg',
      pages : '500',
      Auteur : 'la rousse'
    },
    {
      nom : 'la rousse medical',
      image : '../../../assets/carelib/Laroue-medical.jpg',
      pages : '500',
      Auteur : 'la rousse'
    },
      {
      nom : 'la rousse medical',
      image : '../../../assets/carelib/Laroue-medical.jpg',
      pages : '500',
      Auteur : 'la rousse'
    },
    {
      nom : 'la rousse medical',
      image : '../../../assets/carelib/Laroue-medical.jpg',
      pages : '500',
      Auteur : 'la rousse'
    },
  ];

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
  onClick() {
    this.navCtrl.navigateForward('carelib-details');
  }
}
