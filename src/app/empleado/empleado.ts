export class Empleado{
    //Forma classica de inicialización
    /*
    public nombre:string;
    public edad:number;

    costructor(nombre:any, edad:any)
    {
        this.nombre = nombre;
        this.edad = edad;
    }
    */
   //Forma eficiente de inicialización
   constructor(
       public nombre:string = "",
       public edad:number = 0,
       public cargo:string = "",
       public contratado:boolean = false
   ){};
}