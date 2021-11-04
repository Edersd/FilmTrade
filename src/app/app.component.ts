import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//provider
import { ConfigProvider } from '../providers/config/config';
import { NotificationProvider } from './../providers/notification/notification';

import { HomePage } from '../pages/home/home';
import { ChatListPage } from '../pages/chat-list/chat-list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  private selectedTheme:string;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private configProv: ConfigProvider, private notificationProv:NotificationProvider) {
    this.configProv.removeTheme();
    this.configProv.getTheme().subscribe(theme => this.selectedTheme = theme);
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
      this.notificationProv.getNewToken();
    });
  }
}
