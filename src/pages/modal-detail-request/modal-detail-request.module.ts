import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetailRequestPage } from './modal-detail-request';

@NgModule({
  declarations: [
    ModalDetailRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetailRequestPage),
  ],
})
export class ModalDetailRequestPageModule {}
