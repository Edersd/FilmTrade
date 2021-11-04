import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCompletedWorkPage } from './modal-completed-work';

@NgModule({
  declarations: [
    ModalCompletedWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCompletedWorkPage),
  ],
})
export class ModalCompletedWorkPageModule {}
