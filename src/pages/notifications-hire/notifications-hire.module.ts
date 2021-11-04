import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsHirePage } from './notifications-hire';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    NotificationsHirePage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsHirePage),
    FooterTabsHireComponentModule
  ],
})
export class NotificationsHirePageModule {}
