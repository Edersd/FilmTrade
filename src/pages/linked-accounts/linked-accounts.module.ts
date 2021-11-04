import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkedAccountsPage } from './linked-accounts';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    LinkedAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkedAccountsPage),
    FooterTabsComponentModule,
    FooterTabsHireComponentModule
  ],
})
export class LinkedAccountsPageModule {}
