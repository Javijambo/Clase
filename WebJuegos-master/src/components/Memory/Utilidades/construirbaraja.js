import shuffle from 'lodash.shuffle';
import  FontAwasomeClasses from './fontAwasomeClasses';



const NUMERO_DE_CARTAS = 20 ;

export default() => {
    const fontAwasomeClasses = FontAwasomeClasses(); 
    let cartas = []; //creamos array al que meteremos las cartas(iconos)
    while (cartas.length < NUMERO_DE_CARTAS ){
        const index = Math.floor(Math.random()*fontAwasomeClasses.length); //generamos numero aleatorio (maximo el numero de iconos que tenemos) 
        const carta ={
            icono:fontAwasomeClasses.splice(index, 1)[0], //extraemos el icono aleatoriamente y se lo asignamos a la carta 
            fueAdivinada : false // variable que usaremos para comprobar si la carta ya esta adivinada en el juego
        };

        cartas.push(carta); //metemos la carta del array
        cartas.push({...carta}); //metemos la misma carta con mismas propiedades pero diferente referencia (clonamos)

    }
    return shuffle(cartas); //devolvemos la baraja con todas las cartas ya elegidas y removidas(shuffle)
}
