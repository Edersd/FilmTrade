import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPayPage } from './modal-pay';

@NgModule({
  declarations: [
    ModalPayPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPayPage),
  ],
})
export class ModalPayPageModule {}
