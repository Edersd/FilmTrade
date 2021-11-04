import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatListPage } from './chat-list';
import { FooterTabsComponentModule } from './../../components/footer-tabs/footer-tabs.module';
import { FooterTabsHireComponentModule } from './../../components/footer-tabs-hire/footer-tabs-hire.module';

@NgModule({
  declarations: [
    ChatListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatListPage),
    FooterTabsComponentModule,
    FooterTabsHireComponentModule
  ],
})
export class ChatListPageModule {}
