import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import * as Module from 'module';

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path:'', component:HomeComponent}, //Pagina principal
    {path:'empleado', component:EmpleadoComponent}, //Ruta de empleado
    {path:'fruta',component:FrutaComponent}, //Ruta de fruta
    {path:'home', component:HomeComponent}, //Ruta principal
    {path:'contacto',component:ContactoComponent}, //Ruta de contacto
    {path:'contacto/:page',component:ContactoComponent}, //Ruta de contacto con parametro
    {path:'**',component:HomeComponent} //Pagina para cuando se produzca error
]

export const appRoutingProviders: any[] = []; // Procedimiento de angular que necesita para poder cargar las rutas

export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //Le decimos que array de rutas tiene que cargar 
