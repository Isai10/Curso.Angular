import { Injectable } from "@angular/core";

@Injectable()

export class RopaService{
    public nombre_prenda:String = "Pantalones Vaqueros";
    prueba()
    {
        return this.nombre_prenda;
    }
}