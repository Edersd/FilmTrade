import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileWorkPage } from './profile-work';

@NgModule({
  declarations: [
    ProfileWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileWorkPage),
  ],
})
export class ProfileWorkPageModule {}
