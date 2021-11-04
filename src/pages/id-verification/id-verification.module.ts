import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdVerificationPage } from './id-verification';

@NgModule({
  declarations: [
    IdVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(IdVerificationPage),
  ],
  exports: [
    IdVerificationPage
  ]
})
export class IdVerificationPageModule {}
