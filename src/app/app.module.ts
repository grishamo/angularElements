import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { SecondElementComponent } from './second-element/second-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    SecondElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [CustomButtonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
