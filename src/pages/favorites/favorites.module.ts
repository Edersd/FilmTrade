import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';
@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
    FooterTabsHireComponentModule
  ],
})
export class FavoritesPageModule {}
