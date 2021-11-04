import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalQualifyFreelancePage } from './modal-qualify-freelance';
/* Rangking */
import { IonicRatingModule } from "ionic-rating";
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    ModalQualifyFreelancePage,
  ],
  imports: [
    IonicRatingModule,
    StarRatingModule,
    IonicPageModule.forChild(ModalQualifyFreelancePage),
  ],
})
export class ModalQualifyFreelancePageModule {}
