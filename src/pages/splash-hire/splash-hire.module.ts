import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashHirePage } from './splash-hire';

@NgModule({
  declarations: [
    SplashHirePage,
  ],
  imports: [
    IonicPageModule.forChild(SplashHirePage),
  ],
})
export class SplashHirePageModule {}
