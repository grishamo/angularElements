import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

import { CustomButtonComponent } from '../../../../src/app/custom-button/custom-button.component';
import { SecondElementComponent } from '../../../../src/app/second-element/second-element.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    SecondElementComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CustomButtonComponent, SecondElementComponent]
})
export class AppModule {

  constructor(private injector: Injector) {

    const elements: any[] = [
      [CustomButtonComponent, 'custom-button'],
      [SecondElementComponent, 'second-element']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

  ngDoBootstrap() {}
 }
