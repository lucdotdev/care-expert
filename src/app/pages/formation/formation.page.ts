import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.page.html',
  styleUrls: ['./formation.page.scss'],
})
export class FormationPage implements OnInit {
  formations = [
    {
      titre: 'Comment soigner un enfant ',
      image: '../../../assets/formation/test-femme.jpg',
      duree: '36 heures',
      formateur: 'Gonthilde',
      categorie: 'Pediatrie'
    },
    {
      titre: 'Comment soigner un enfant ',
      image: '../../../assets/formation/test-femme.jpg',
      duree: '36 heures',
      formateur: 'Gonthilde',
      categorie: 'Pediatrie'
    },
    {
      titre: 'Comment soigner un enfant ',
      image: '../../../assets/formation/test-femme.jpg',
      duree: '36 heures',
      formateur: 'Gonthilde',
      categorie: 'Pediatrie'
    },

  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
   onClick() {
     this.navCtrl.navigateForward('formation-details');
   }
}
