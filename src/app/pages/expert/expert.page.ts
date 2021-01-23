import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})


export class ExpertPage implements OnInit {
  experts = [
    {
      nom: 'Dr patrick',
      photo: '../../assets/expert-details/docteur6.jpg',
      profession: 'cardiologue'

     },
     {
      nom: 'Dr gothilde',
      photo: '../../assets/expert-details/docteur4.jpg',
      profession: 'chirurgien'


     },
     {
      nom: 'Dr leotine',
      photo: '../../assets/expert-details/docteur4.jpg',
      profession: 'dentiste'


     },
     {
      nom: 'Dr adam',
      photo: '../../assets/expert-details/docteur5.jpg',
      profession: 'pediatre'


     },
     {
      nom: 'Dr luc',
      photo: '../../assets/expert-details/docteur6.jpg',
      profession: 'pharmacien'


     },
     {
      nom: 'Dr lieven',
      photo: '../../assets/expert-details/Docteur-Tierny.jpg',
      profession: 'dermatologue'


     }

];

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
  onClick() {
  this.navCtrl.navigateBack('home');
  }
  onClick1() {
    this.navCtrl.navigateForward('expert-details');
  }

}
