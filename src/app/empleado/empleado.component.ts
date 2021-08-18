
import { Component } from "@angular/core";
import { Empleado } from './empleado';
@Component({
    selector:'empleado',
    templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
    nombre_component = 'Componente de empleados';

    public empleado:Empleado = new Empleado("",0,"",false);
    public trabajador_externo:boolean = true;
    public trabajadores:Array<Empleado> = new Array<Empleado>();
    public color?:string;   
    public color_seleccionado?:string;
    constructor(){
        this.empleado = new Empleado("German Isai", 24, "CEO", false);

        this.trabajadores =  [
            new Empleado("Yozil Luis",25,"UI Designer",true),
            new Empleado("Flavio Luis",28,"RH",false),
            new Empleado("Andrea pachecho",28,"RH",true)
        ];
        this.color = "green";
        this.color_seleccionado = "#ccc"
        console.log(this.empleado);
    }
    ngOnInit(){
       
    }
    cambiarExterno(valor:boolean)
    {
        this.trabajador_externo = valor;
    }
    logColorSeleccionado()
    {
        console.log(this.color_seleccionado);
    }
}