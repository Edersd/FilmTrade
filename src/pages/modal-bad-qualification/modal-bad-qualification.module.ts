import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBadQualificationPage } from './modal-bad-qualification';

/* Rangking */
import { IonicRatingModule } from "ionic-rating";
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    ModalBadQualificationPage,
  ],
  imports: [
    IonicRatingModule,
    StarRatingModule,
    IonicPageModule.forChild(ModalBadQualificationPage),
  ],
})
export class ModalBadQualificationPageModule {}
