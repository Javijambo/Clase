var objetoJavascript = {"clave":"valor"},
textoJson=JSON.stringify(objetoJavascript);

console.log(typeof textoJson);
console.log(textoJson);

var objetoJavascript={"hora":11, "dia": 1, "mes":7, "año":2019},
textoJson=JSON.stringify(objetoJavascript, ["mes","año"]);
console.log(textoJson);

var filtro=function(clave,valor){
    if (clave==="hora"){
        return undefined
    }
    return valor;
}
var objetoJavascript={"hora":11, "dia": 1, "mes":7, "año":2019},
textoJson=JSON.stringify(objetoJavascript, filtro,4);  // el valor 4 del tercer parámetro indica que se deben insertar 4 espacios en blanco antes de cada uno de los regirstros.
console.log(textoJson);