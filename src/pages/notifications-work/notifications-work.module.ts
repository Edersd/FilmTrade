import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsWorkPage } from './notifications-work';
import { FooterTabsComponent } from './../../components/footer-tabs/footer-tabs';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';

@NgModule({
  declarations: [
    NotificationsWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsWorkPage),
    FooterTabsComponentModule
  ],
})
export class NotificationsWorkPageModule {}
