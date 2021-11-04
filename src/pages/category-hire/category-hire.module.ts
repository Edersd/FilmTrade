import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryHirePage } from './category-hire';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    CategoryHirePage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryHirePage),
    FooterTabsHireComponentModule
  ],
})
export class CategoryHirePageModule {}
