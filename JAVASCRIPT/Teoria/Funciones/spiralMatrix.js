/**
 *  Dada una matriz de m x n elementos (m filas, n columnas),
 *  devolver todos los elementos de la matriz siguiendo una espiral.
 *  Por ejemplo,
 *  Para la siguiente matriz:
 *  [
 *   [ 1, 2, 3 ],
 *   [ 4, 5, 6 ],
 *   [ 7, 8, 9 ]
 *  ]
 *
 *
 *  la función retornará: [1, 2, 3, 6, 9, 8, 7, 4, 5].
 */
function spiral_traversal(array) {
    var result = [];

    if (array.length == 0 ){
        return result;
    }

    var max = array[0].length -1;

    // Tomamos la primera fila | result.push.apply(result,array[0])
    for (var i=0;i<=max;i++){
        result.push(array[0][i]);
    }

    // Tomamos la última columna
    for (var i=1;i< max;i++){
        result.push(array[i][max]);
    }

    // Tomamos la última fila
    for (var i=max;i>=0;i--){
        result.push(array[max][i]);
    }

    // Tomamos la primera columna
    for (var  i=max-1;i> 0;i--){
        result.push(array[i][0]);
    } 

    subarray = [];
    // Gestionamos la matriz interna
    for (var i=1;i<max;i++){
        subarray.push(array[i].splice(1,max-1));
    }

    // Hacemos la llamada recursivamente a la función
    result = result.concat( spiral_traversal(subarray) );

    return result;
}