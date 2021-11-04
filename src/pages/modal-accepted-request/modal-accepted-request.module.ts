import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAcceptedRequestPage } from './modal-accepted-request';

@NgModule({
  declarations: [
    ModalAcceptedRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAcceptedRequestPage),
  ],
})
export class ModalAcceptedRequestPageModule {}
