import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
