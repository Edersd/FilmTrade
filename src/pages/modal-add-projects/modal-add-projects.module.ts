import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAddProjectsPage } from './modal-add-projects';

@NgModule({
  declarations: [
    ModalAddProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAddProjectsPage),
  ],
})
export class ModalAddProjectsPageModule {}
