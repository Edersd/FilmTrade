import { BrowserModule } from '@angular/platform-browser';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

//native
import { Camera, CameraOptions  } from '@ionic-native/camera';
import { CardIO } from '@ionic-native/card-io';
import { Crop } from '@ionic-native/crop';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileUploadOptions } from '@ionic-native/file-transfer';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Facebook } from '@ionic-native/facebook';
import { FCM } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';

//Components
import { CalendarModule } from "ion2-calendar";
import { IonicImageLoader } from 'ionic-image-loader';
import { IonCardIoComponent } from '../components/ion-card-io/ion-card-io';
//import { Ionic2RatingModule } from 'ionic2-rating';
import { StarRatingModule } from 'ionic3-star-rating';
import { IonicRatingModule } from 'ionic-rating';

//Paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from './../pages/register/register';
import { SelectRegisterPage } from './../pages/select-register/select-register';
//import { IdVerificationPage } from './../pages/id-verification/id-verification';
import { PaymentsPage } from './../pages/payments/payments';
import { SplashHirePage } from './../pages/splash-hire/splash-hire';
import { EditInfoPage } from './../pages/edit-info/edit-info';
import { ProfileWorkPage } from './../pages/profile-work/profile-work';
import { PortfolioWorkPage } from './../pages/portfolio-work/portfolio-work';
import { SelectPakageWorkPage } from './../pages/select-pakage-work/select-pakage-work';
import { ListProfilesPage } from './../pages/list-profiles/list-profiles';
import { EditInfoHirePage } from './../pages/edit-info-hire/edit-info-hire';
import { SuportHelpPage } from './../pages/suport-help/suport-help';
import { AboutFtPage } from './../pages/about-ft/about-ft';
import { MenuHomePage } from '../pages/menu-home/menu-home';
import { MenuHomeWorkPage } from '../pages/menu-home-work/menu-home-work';
import { ChatListPage } from '../pages/chat-list/chat-list'; 
import { ChatRoomPage } from '../pages/chat-room/chat-room';
//import { AddProjectPage } from './../pages/add-project/add-project';

//Modales
import { ModalProcessingDataPage } from './../pages/modal-processing-data/modal-processing-data';

//Galeria
import { IonicImageViewerModule } from 'ionic-img-viewer';

//providers
import { HttpClientModule } from '@angular/common/http';
import { AccountProvider } from '../providers/account/account';
import { ConfigProvider } from '../providers/config/config';
import { HttpModule } from '@angular/http';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { from } from 'rxjs';


//Componentes
import { FooterTabsComponent } from './../components/footer-tabs/footer-tabs';
import { HeaderMenuComponent } from './../components/header-menu/header-menu';
import { HeaderMenuHireComponent } from './../components/header-menu-hire/header-menu-hire'
import { ComponentsModule } from './../components/components.module'
import { NotificationProvider } from '../providers/notification/notification';

export const FIREBASE_ENVIRONMENT = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDXIcQm5yxd2oR2MbmLCh8Ekjgdt9zPM44',
    authDomain: 'filmtrade-34ab8.firebaseapp.com',
    databaseURL: 'https://filmtrade-34ab8.firebaseio.com',
    projectId: 'filmtrade-34ab8',
    storageBucket: 'filmtrade-34ab8.appspot.com',
    messagingSenderId: '30574087346'
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    SelectRegisterPage,
    //IdVerificationPage,
    PaymentsPage,
    SplashHirePage,
    EditInfoPage,
    ProfileWorkPage,
    PortfolioWorkPage,
    SelectPakageWorkPage,
    ListProfilesPage,
    EditInfoHirePage,
    SuportHelpPage,
    AboutFtPage,
    ModalProcessingDataPage,
    MenuHomePage,
    MenuHomeWorkPage,
    IonCardIoComponent,
    //FooterTabsComponent,
    HeaderMenuComponent,
    HeaderMenuHireComponent

  ],
  imports: [
    IonicRatingModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
/*       iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition' */
    }
    ),
    IonicImageViewerModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    CalendarModule,
    //Ionic2RatingModule,
    StarRatingModule,
    IonicImageLoader.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_ENVIRONMENT.firebase),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    SelectRegisterPage,
    //IdVerificationPage,
    PaymentsPage,
    SplashHirePage,
    EditInfoPage,
    ProfileWorkPage,
    PortfolioWorkPage,
    SelectPakageWorkPage,
    ListProfilesPage,
    EditInfoHirePage,
    SuportHelpPage,
    AboutFtPage,
    ModalProcessingDataPage,
    MenuHomePage,
    MenuHomeWorkPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    HttpClientModule,
    AccountProvider,
    ConfigProvider,
    Camera,
    CardIO,
    Crop,
    File,
    FileTransfer,
    FileTransferObject,
    FCM,
    
    LocalNotifications,
    WebView,
    Facebook,
    AngularFireDatabase,
    //FileUploadOptions,
    Transfer,
    FilePath,
    NotificationProvider,
    
  ]
})
export class AppModule { }
