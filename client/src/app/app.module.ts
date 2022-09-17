import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './common/card/card.component';
import { OnionSvgComponent } from './onion-svg/onion-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    OnionSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
