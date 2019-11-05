function Mascota(tipo, nombre, peso, aficiones){
    this.tipo=tipo;
    this.nombre=nombre;
    this.peso=peso;
    this.aficiones=aficiones;
}



window.onload=init;
// serializando el objeto (usamos método stringify)
function init(){
    var bigotes=new Mascota("gato","Bigotes",7,["dormir","ronronear","cazar ratones"]);
    console.log(bigotes);
    var bigotesJSON=JSON.stringify(bigotes);
    console.log(bigotesJSON);

    var bozal=new Mascota("perro","Bozal",7,["comer","ladrar","cazar conejos"]);
    console.log(bozal);
    var bozalJSON=JSON.stringify(bozal);
    console.log(bozalJSON);
//deserializando al perro
    deserialize(bozalJSON);
}

//función de deserialización (usamos método parse)
function deserialize(bicho){
    var otrobicho=JSON.parse(bicho);

    alert("Nombre: "+otrobicho.nombre+"\nTipo: "
        +otrobicho.tipo+"\nPeso: "+otrobicho.peso
        +"\nAficiones: "+otrobicho.aficiones[0]+", "+otrobicho.aficiones[1]+", "+otrobicho.aficiones[2]);

   // console.log (otrobicho.nombre);
   // console.log (otrobicho.tipo);
   // console.log (otrobicho.peso);
   // console.log (otrobicho.aficiones);
}