import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstAngularComponentComponent } from './my-first-angular-component/my-first-angular-component.component';
import { MySecondNgComponentComponent } from './my-second-ng-component/my-second-ng-component.component';
import { MyThirdComponentComponent } from './my-third-component/my-third-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstAngularComponentComponent,
    MySecondNgComponentComponent,
    MyThirdComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
