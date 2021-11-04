import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuHomeWorkPage } from './menu-home-work';

import { HeaderMenuComponent } from './../../components/header-menu/header-menu';
import { ComponentsModule } from './../../components/components.module';


@NgModule({
  declarations: [
    MenuHomeWorkPage,
    HeaderMenuComponent,
  ],
  imports: [
    IonicPageModule.forChild(MenuHomeWorkPage),
    ComponentsModule
    //HeaderMenuComponent
  ],
})
export class MenuHomeWorkPageModule {}
