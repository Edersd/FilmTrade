import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorePage } from './explore';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';

@NgModule({
  declarations: [
    ExplorePage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorePage),
    FooterTabsComponentModule
  ],
})
export class ExplorePageModule {}
