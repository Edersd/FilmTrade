import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRequestSendPage } from './modal-request-send';

@NgModule({
  declarations: [
    ModalRequestSendPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRequestSendPage),
  ],
})
export class ModalRequestSendPageModule {}
