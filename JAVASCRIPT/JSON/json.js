function Vehiculo(tipo, medio, velocidad, capacidad) {
    this.tipo = tipo;
    this.medio = medio;
    this.velocidad = velocidad;
    this.capacidad = capacidad;
}

window.onload = init;

function init() {
    var Mustang = new Vehiculo("Coche", "Carretera", "378 km/h", "4 plazas");
    var MustangJson = JSON.stringify(Mustang);

    var Avion = new Vehiculo("Avion", "Aire", "933 km/h", "200 plazas");
    var AvionJson = JSON.stringify(Avion);

    var Barco = new Vehiculo("Yate", "Mar", "130 km/h", "150 plazas");
    var BarcoJson = JSON.stringify(Barco);

    console.log(MustangJson);
    console.log(AvionJson);
    console.log(BarcoJson);

    document.getElementById("boton").addEventListener('click', mostrar);
    document.getElementById("eliminar").removeEventListener('click', mostrar);

    //function deserialize(V) {
    //   var v2 = JSON.parse(V);
    //   document.body.innerHTML += ("<h2>" + v2.tipo + "</h2><h3><ul><li>Medio: " + v2.medio + "</li> <li>Velocidad: " + v2.velocidad + "</li><li>Capacidad: " + v2.capacidad + "</li></ul></h3> <br>");
    // }

    function mostrar() {
        var indice = document.getElementById("vehiculos");
        var v = indice.options[indice.selectedIndex].value;

        alert(v);
        var coche = JSON.parse(MustangJson);
        var avion = JSON.parse(AvionJson);
        var barco = JSON.parse(BarcoJson);
        if (v == coche.tipo) {
            document.body.innerHTML += ("<li>Medio: " + MustangJson.medio + "</li> <li>Velocidad: " + coche.velocidad + "</li><li>Capacidad: " + MustangJson.capacidad + "</li></ul></h3> <br>");
        } else if (v == barco.tipo) {
            document.body.innerHTML += ("<li>Medio: " + BarcoJson.medio + "</li> <li>Velocidad: " + BarcoJson.velocidad + "</li><li>Capacidad: " + BarcoJson.capacidad + "</li></ul></h3> <br>");
        } else if (v == avion.tipo) {
            document.body.innerHTML += ("<li>Medio: " + AvionJson.medio + "</li> <li>Velocidad: " + AvionJson.velocidad + "</li><li>Capacidad: " + AvionJson.capacidad + "</li></ul></h3> <br>");
        }
    }
}