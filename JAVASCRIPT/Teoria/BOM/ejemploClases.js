class unaClase{
    constructor(opcion_1, opcion2){
     //   console.log ("Creando una instancia");
        this.opcion_1=opcion_1;
        this.opcion2=opcion2;
        this.names_ =[];
    }

   /**
     * @param {any} valor
     */
   set name (valor){
        this.names_.push(valor);
   }

   /**
     * @param {any} valor
     */
   set opcion_1 (valor){
       this.opcion_1=valor;
   }

   get opcion_1(){
       return this.opcion_1;
   }
}

class otraClase extends unaClase{

    constructor(){
        super()
    }
}