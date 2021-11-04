import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProfilesPage } from './list-profiles';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    ListProfilesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProfilesPage),
    FooterTabsHireComponentModule
  ],
})
export class ListProfilesPageModule {}
