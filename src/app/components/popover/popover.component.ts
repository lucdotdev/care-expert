import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Events } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  page;

  constructor(
    private popoverController: PopoverController) {

  }

  ngOnInit() {

  }
  close() {
   this.popoverController.dismiss();

  }
}
