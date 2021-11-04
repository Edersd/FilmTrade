import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourProjectsPage } from './your-projects';
import { IonicRatingModule } from "ionic-rating";

import { StarRatingModule } from 'ionic3-star-rating';

import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    YourProjectsPage,
  ],
  imports: [
    IonicRatingModule,
    StarRatingModule,
    IonicPageModule.forChild(YourProjectsPage),
    FooterTabsHireComponentModule
  ],
})
export class YourProjectsPageModule {}
