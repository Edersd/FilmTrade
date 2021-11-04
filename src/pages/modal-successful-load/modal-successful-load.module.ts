import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSuccessfulLoadPage } from './modal-successful-load';

@NgModule({
  declarations: [
    ModalSuccessfulLoadPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSuccessfulLoadPage),
  ],
})
export class ModalSuccessfulLoadPageModule {}
