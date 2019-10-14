function palindromo(palabra) {
    var p = palabra.toLocaleLowerCase();
    var palabra1 = p.replace(/\s/g, '');

    var array = palabra1.split("");
    var arrayaux = palabra1.split("");
    var array2 = array.reverse();

    var palabra2 = array2.join("");

    if (palabra1 == palabra2) {
        return ("es palindromo");
    } else {
        for (var i = 0; i < arrayaux.length; i++) {
            if (arrayaux[i] != array2[i]) {
                i = i + 1;
                return ("No es palindromo, carácter: " + i);
                break;
            }
        }
    }
};

var palabra = prompt("Escriba una frase");
alert(palindromo(palabra));