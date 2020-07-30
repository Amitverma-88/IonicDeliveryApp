import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../app/services/auth.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from './services/auth-guard.service';

import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    AuthGuardService,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){         
    firebase.initializeApp(environment.firebase);
  }
}
