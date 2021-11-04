import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilWorkPage } from './perfil-work';
import { FooterTabsComponent } from './../../components/footer-tabs/footer-tabs'
import { ComponentsModule } from './../../components/components.module';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';

@NgModule({
  declarations: [
    PerfilWorkPage,
    //FooterTabsComponent
  ],
  imports: [
    IonicPageModule.forChild(PerfilWorkPage),
    ComponentsModule, 
    FooterTabsComponentModule
  ],
})
export class PerfilWorkPageModule {}
