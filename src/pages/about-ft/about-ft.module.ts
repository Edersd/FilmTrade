import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutFtPage } from './about-ft';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    AboutFtPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutFtPage),
    FooterTabsComponentModule,
    FooterTabsHireComponentModule
  ],
})
export class AboutFtPageModule {}
