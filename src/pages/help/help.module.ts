import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpPage } from './help';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';

@NgModule({
  declarations: [
    HelpPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpPage),
    FooterTabsComponentModule
  ],
})
export class HelpPageModule {}
