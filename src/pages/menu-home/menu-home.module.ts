import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuHomePage } from './menu-home';
import { HeaderMenuHireComponent } from './../../components/header-menu-hire/header-menu-hire';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    MenuHomePage,
    HeaderMenuHireComponent
  ],
  imports: [
    IonicPageModule.forChild(MenuHomePage),
    ComponentsModule
  ],
})
export class MenuHomePageModule {}
