import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqPage } from './faq';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    FaqPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqPage),
    FooterTabsComponentModule,
    FooterTabsHireComponentModule
  ],
})
export class FaqPageModule {}
