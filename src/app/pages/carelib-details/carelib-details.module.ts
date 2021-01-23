import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarelibDetailsPage } from './carelib-details.page';

const routes: Routes = [
  {
    path: '',
    component: CarelibDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarelibDetailsPage]
})
export class CarelibDetailsPageModule {}
