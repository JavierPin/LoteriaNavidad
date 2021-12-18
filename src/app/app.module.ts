import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HttpClientModule } from "@angular/common/http";

// servicios
import { InspectorNumerosService } from './services/inspector-numeros.service';
import { ListadoNumerosModule } from './listado-numeros/listado-numeros.module';

// resto imports


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    HttpClientModule, ListadoNumerosModule
  ],
  providers: [ InspectorNumerosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
