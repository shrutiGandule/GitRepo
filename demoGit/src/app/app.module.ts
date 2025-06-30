import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MotorIncComponent } from './motor-inc/motor-inc.component';
import { TravelIncComponent } from './travel-inc/travel-inc.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorIncComponent,
    TravelIncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
