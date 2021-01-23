import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides  } from '@ionic/angular';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  @ViewChild(IonSlides, {static: false}) slides: IonSlides;

  constructor() { }
  gotoNextSlide() { this.slides.slideNext(); }
  gotoPrevSlide() { this.slides.slidePrev(); }

  ngOnInit() {
  }




}
