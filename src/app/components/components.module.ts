import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';


@NgModule({
  declarations: [PopoverComponent],
  exports: [PopoverComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}
