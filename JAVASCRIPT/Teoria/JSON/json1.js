var objetoJson=JSON.parse('{"clave":"valor"}');  // uso básico del método parse
console.log(objetoJson.clave);

var textoJson='{"usb":20, "mouse":30, "mousepad":10}',
    precioConIgv = function(producto, precio){ // se utiliza como parámetro reviver del método parse (2do. argumento opcional)
        if (producto==="mousepad"){
        return undefined;
        }
        if (producto===""){
            return precio;
        }
        return precio + (precio *0.18);
    },
    objetoJson=JSON.parse(textoJson,precioConIgv);
    console.log(objetoJson);
