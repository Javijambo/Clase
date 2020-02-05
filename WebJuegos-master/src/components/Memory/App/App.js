import React, { Component } from 'react';
import Header from '../Header/Header';
import Tablero from '../Tablero/Tablero';
import construirBaraja from '../Utilidades/construirbaraja';
import './App.css';


const getEstadoInicial = () => {
  const baraja = construirBaraja(); //generamos la baraja para el juego 
  return { //devolvemos la baraja y las siguientes comprobaciones 
    baraja,
    parejaSeleccionada: [],  //array donde meteremos dos cartas seleccionadas para compararlas 
    estaComparando: false, // cuando usuario seleccione dos cartas cambiaremos a true mientras comprobamos si son la misma para que usuario no siga seleccionando cartas
    numeroDeIntentos: 0  
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial(); //creamos el estado inicial de la aplicacion 
  }

  render() {
    return (
      <div className="App">
        <Header 
          numeroDeIntentos={this.state.numeroDeIntentos} //mandamos el numero de intentos al header
          resetearPartida={() => this.resetearPartida()} //mandamos la funcion resetear al header
        />
        <Tablero 
          baraja={this.state.baraja} //enviamos la baraja al tablero 
          parejaSeleccionada={this.state.parejaSeleccionada}  //enviamos estado de pareja seleccionada 
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)} 
        />
      </div>
    );
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando || //si estamos comparando no dejamos seleccionar carta
      this.state.parejaSeleccionada.indexOf(carta) > -1 || //si usuario ya escogio la carta no le dejamos tampoco
      carta.fueAdivinida // si el usuario selecciona carta adivinada ya 
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta]; //creamos array con las cartas seleccionadas 
    this.setState({
      parejaSeleccionada
    });

    if (parejaSeleccionada.length === 2) { //si usuario a seleccionado dos cartas
      this.compararPareja(parejaSeleccionada); //si es asi comparamos la pareja para ver si es igual
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true}); //indicamos al estado que estamos comparando para que no deje seleccionar mas cartas

    setTimeout(() => { //vamos a añadir tiempo para que el usuario pueda ver la segunda carta si esta no es correcta
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) { //si las cartas son iguales
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) { //iconos diferentes por lo que no acerto
            return carta;
          }

          return {...carta, fueAdivinada: true}; //si llegamos aqui fue adivinada por lo que dejamos carta y indicamos que fue adivinada
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      })
    }, 1000)
  }

  verificarSiHayGanador(baraja) {
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0 //si ninguna carta no fue adivinada gano la partida 
    ) {
      alert(`Ganaste en ${this.state.numeroDeIntentos} intentos!`);
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial() //ponemos juego en estado inicial, reseteamos juego.
    );
  }
}

export default App;
