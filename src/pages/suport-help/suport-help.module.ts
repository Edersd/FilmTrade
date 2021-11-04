import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuportHelpPage } from './suport-help';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';
import { FooterTabsComponent } from './../../components/footer-tabs/footer-tabs';
import { FooterTabsHireComponent } from './../../components/footer-tabs-hire/footer-tabs-hire';

@NgModule({
  declarations: [
    SuportHelpPage,
    FooterTabsHireComponent,
    FooterTabsComponent
  ],
  imports: [
    IonicPageModule.forChild(SuportHelpPage),
    FooterTabsComponentModule,
    FooterTabsHireComponentModule
  ],
})
export class SuportHelpPageModule {}
