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
import { ToptenLobbyComponent } from './topten/topten-lobby/topten-lobby.component';
import { ToptenGiveanswerComponent } from './topten/topten-giveanswer/topten-giveanswer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToptenCardComponent } from './topten/topten-card/topten-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToptenStatsComponent } from './topten/topten-stats/topten-stats.component';
import { ButtonDirective } from './common/button.directive';
import { CardDirective } from './common/card.directive';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
    ToptenOrderhintsComponent,
    ToptenLobbyComponent,
    ToptenGiveanswerComponent,
    ToptenCardComponent,
    ToptenStatsComponent,
    ButtonDirective,
    CardDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faLib: FaIconLibrary) {
    faLib.addIcons(faUser);
  }
}
