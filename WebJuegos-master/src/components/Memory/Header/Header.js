import React, { Component } from 'react';
import './Header.css';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo">React-Memoria
                <div>
                        <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
                            Reiniciar Juego
                     </button>
                    </div>
                </div>
                <div className="titulo">
                    Intentos: {this.props.numeroDeIntentos}
                </div>
                <div className="titulo">
                    <a href="/" style={{ color: 'white' }}>Otros juegos</a>
                </div>
            </header>
        );
    }
}