import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './common/card/card.component';
import { OnionSvgComponent } from './onion-svg/onion-svg.component';
import { ToptenComponent } from './topten/topten.component';
import { NotificationComponent } from './common/notification/notification.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { ToptenChoosetextComponent } from './topten/topten-choosetext/topten-choosetext.component';
import { ToptenOrderhintsComponent } from './topten/topten-orderhints/topten-orderhints.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    OnionSvgComponent,
    ToptenComponent,
    NotificationComponent,
    SpinnerComponent,
    ToptenChoosetextComponent,
    ToptenOrderhintsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
