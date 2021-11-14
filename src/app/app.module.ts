import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './mycomp/mycomp.component';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2.directive';
import { HighlightParamsDirective } from './highlight-params.directive';


import { RouterModule } from '@angular/router';
import { MyAppRouting } from './routing/app.routes';
import { SecondPageComponent } from './second-page/second-page.component';
import { MainPageComponent } from './main-page/main-page.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, MyComponent, HighlightDirective, Highlight2Directive, HighlightParamsDirective, SecondPageComponent, MainPageComponent
  ],
  imports: [
    BrowserModule, FormsModule,RouterModule.forRoot(MyAppRouting),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
