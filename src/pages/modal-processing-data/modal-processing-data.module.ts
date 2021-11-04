import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalProcessingDataPage } from './modal-processing-data';

@NgModule({
  declarations: [
    ModalProcessingDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalProcessingDataPage),
  ],
})
export class ModalProcessingDataPageModule {}
