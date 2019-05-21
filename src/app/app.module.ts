import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NextThreeStateCheckboxComponent } from './next-three-state-checkbox/next-three-state-checkbox.component';

@NgModule({
  declarations: [NextThreeStateCheckboxComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const appButton = createCustomElement(NextThreeStateCheckboxComponent, { injector: this.injector });
    customElements.define('app-button', appButton);
  }
}
