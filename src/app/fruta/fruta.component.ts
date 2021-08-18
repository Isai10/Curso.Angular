//Paquete donde podemos importar la clase
import { Component } from '@angular/core';
//Decoradores, le dan una funcionalidad extra a la clase, le podemos indicar ciertos metadatos
@Component({
    selector: 'fruta', //Etiqueta donde se va a cargar el componente
    templateUrl: './fruta.component.html'
})
//Se define clase
export class FrutaComponent{
    //Propiedades de la clase
    public nombre_component ;
    public listado_frutas ;
    public nombre:string ;
    public edad:number ;
    public estatus:boolean ;
    public trabajosArray:Array<any> ;
    public comodin:any ;

    //Constructor(Así se define un constructor): sirve para darle un valor a las propiedades
    constructor(){

        this.comodin ='10/Septiembre/1996';
        this.nombre_component ="Componente de fruta";
        this.listado_frutas  = "Naranja, manzana, pera sandia   ";
        this.nombre  = "Germán Isaí Tovar Martínez";
        this.edad = 24;
        this.estatus = true;
        this.trabajosArray = ['Software engineer', 'Graphic Designer', 'Musician', 'Photographer','Farmer', 5];
        
    }
    //El metodo ngOnInit esta orientado para llamar algun tipo de servicio o metodos de la clase
    ngOnInit(){
        var num1 = 10;
        if(1===1)
        {
             var num1 = 90;
        }
    }
    mensaje(msj:any){
        alert(msj);
    }
}
