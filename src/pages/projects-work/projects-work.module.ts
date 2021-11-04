import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsWorkPage } from './projects-work';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';

@NgModule({
  declarations: [
    ProjectsWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsWorkPage),
    FooterTabsComponentModule
  ],
})
export class ProjectsWorkPageModule {}
