import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoordinadoresComponent } from './coordinadores/coordinadores.component';


@NgModule({
  declarations: [
    AppComponent,
    CoordinadoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
