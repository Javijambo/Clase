import React, { Component } from 'react';
import './Carta.css';
import ReactCardFlip from 'react-card-flip';
export default class Carta extends Component {
  constructor() { //creamos el estado inicial de la carta, que es flipped false para que este boca abajo
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) { //cuando utilicemos esta funcion(dar click sobre la carta) cambiaremos flipped para que la carta de la vuelta 
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="carta" onClick={this.props.seleccionarCarta}>
        <ReactCardFlip
          isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada} //si se esta comprobando o si fue adivinada 
          flipDirection="horizontal" //indicamos direccion del volteo de la carta 
          > 
          <div className="portada" onClick={this.handleClick}>
          </div>

          <div className="contenido" onClick={this.handleClick}>  
            <i className={`fa ${this.props.icono} fa-5x`}></i> 
          </div>
        </ReactCardFlip>
      </div>
    )
  }

}