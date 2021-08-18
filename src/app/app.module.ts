import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FrutaComponent } from './fruta/fruta.component';
import { AppComponent } from './app.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import { FormsModule } from '@angular/forms'
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

import { routing, appRoutingProviders } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing, //Cargamos modulos de rutas, la variable routing

  ],
  providers: [appRoutingProviders], //Servicios de routing
  bootstrap: [AppComponent]
})
export class AppModule { }
