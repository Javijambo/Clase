import React, { Component } from 'react';
import Carta from '../Carta/Carta'
import './Tablero.css';

export default class Tablero extends Component {
    render() {
        return (
            <div className="tablero">
                {
                    this.props.baraja //elemento baraja que nos envian desde app 
                        .map((carta, index) => {
                            const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;  //calcula si la carta del MAP esta en el array parejaseleccionada y si es asi esta siendo comparada
                            return <Carta
                                key={index}
                                icono={carta.icono}
                                estaSiendoComparada={estaSiendoComparada} //indicamos si esta o no siendo comparada
                                seleccionarCarta={() => this.props.seleccionarCarta(carta)} //pasamos la carta que tenemos selenccionada ahora mismo 
                                fueAdivinada={carta.fueAdivinada} //indicamos si fue adivinada o no la pareja
                            />;
                        })
                }
            </div>

        );
    }
}