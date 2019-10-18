class Animal {
    constructor(nombre, especie, numPatas, cola) {
      this.nombre = nombre;
      this.especie = especie;
      this.numPatas = numPatas;
      this.cola = cola;
    }
  
    /*getters
     *--------------------------------------------------------
     *Ninguno de estos getters deben ir 
     *en las otras clases que extiendan de Animal
    */
    getNombre() {
      return this.nombre;
    }
  
    getEspecie() {
      return this.especie;
    }
  
    getPatas() {
      return this.numPatas;
    }
  
    getCola() {
      return this.cola;
    }
     /*--------------------------------------------------------*/
  
  
    /*setters
     *--------------------------------------------------------
     *Ninguno de estos setters deben ir 
     *en las otras clases que extiendan de Animal
     *NÓTESE que los setters podrían requerir controles especiales
     *según su naturaleza. Como controlar el tipo de dato recibido
     *y cambiar el estado del objeto, sumando, restando, etc.
   */
  
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setEspecie(especie) {
    this.especie = especie;
  }

  setPatas(patas) {
    this.numPatas = this.numPatas + (patas);
  }

  setCola(cola) {
    this.cola = cola;
  }

}

class Vaca extends Animal {
  constructor(nombre, especie, numPatas, cola, litros) {
    super(nombre, especie, numPatas, cola);
    /*propiedad particular de Vaca*/
    this.litros = litros;
  }


  getMilk(cantidad) {
    var msgInfo = '';
    if (isNaN(cantidad) || cantidad <= 0) {
      msgInfo = 'El dato "' + cantidad + '" no es válido';
    } else {
      var intControl = this.litros - cantidad;
      if (intControl > 0) {
        msgInfo = this.nombre + ' tenía ' + this.litros + ' litros \nSe ordeñaron ' + cantidad + ' y le quedan ' + intControl;
        this.litros = intControl;
      } else {
        msgInfo = this.nombre + ' tiene ' + this.litros + ' litros y estás pidiendo ¡' + cantidad + '! \nNo es posible!';
      }
    }
    console.log(msgInfo);

  }
}

class Tigre extends Animal {
  constructor(nombre, especie, numPatas, cola, victimas, colmillos) {
    super(nombre, especie, numPatas, cola);
    /*propiedad particulares de Tigre*/
    this.victimas = victimas;
    this.colmillos = colmillos;
  }

  //getter y setter de propiedad propia de Tigre
  getColmillos() {
    return this.colmillos;
  }

  setColmillos(colmillos) {
    this.colmillos = this.colmillos + (colmillos);
  }

  cazar(cantidad) {
    var msgInfo = '';
    if (isNaN(cantidad) || cantidad <= 0) {
      msgInfo = 'El dato "' + cantidad + '" no es válido';
    } else {
      var intControl = this.victimas + cantidad;
      this.victimas = intControl;
      msgInfo = `${this.nombre} acaba de cazar ${cantidad}  víctima(s).\nAhora tiene ${intControl}`;
    }
    console.log(msgInfo);
  }
}


/*VACA*/
var objVaca = new Vaca('Milex', 'Mamífero', 4, true, 10);

console.log(objVaca);
objVaca.getMilk(4);

/*Probamos un setter y getter NÓTESE QUE  SON DE LA CLASE Animal*/
objVaca.setNombre('Nueva Milex');
console.log('Ahora el objeto se llama ' + objVaca.getNombre());

/*Probamos algunos controles del ordeñado*/
objVaca.getMilk(-40);
objVaca.getMilk('a');

/*TIGRE*/
var objTigre = new Tigre('TigerHunter', 'Salvaje', 4, true, 30, 8);

/*Veamos el objeto*/
console.log(objTigre);

/*BENEFICIOS DE LA HERENCIA:
 *Podemos usar métodos de la clase Animal y de la clase Tigre
 */
console.log('Me llamo: ' + objTigre.getNombre() + ' y tengo: ' + objTigre.getColmillos() + ' colmillos');

/*El método cazar acumula víctimas*/
objTigre.cazar(3);
objTigre.cazar(0);

/*Modificamos el Tigre, y lo vemos ya viejo :)*/
objTigre.setNombre('TigerHunter ya viejo');
objTigre.setColmillos(-7);
objTigre.setPatas(-1);
objTigre.setCola(false);



console.log(objTigre);