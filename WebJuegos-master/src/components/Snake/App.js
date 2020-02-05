import React, { Component } from 'react';
import Serpiente from './Component/Serpiente';
import Fruta from './Component/Fruta';
import Header from './Header/Header';

const coordenadas = () => {
	let min = 5;
	let max = 100;
	let x = Math.floor((Math.random() * (max - min) + min) / 5) * 5;
	let y = Math.floor((Math.random() * (max - min) + min) / 5) * 5;
	return [x, y];
};

const Inicio = {

	velocidad: 300,
	fruta: coordenadas(),
	direction: 'der',
	cuerpoSerpiente: [[0, 0], [5, 0]]
};

class App extends Component {
	state = Inicio;

	componentDidMount() {
		setInterval(this.moversnake, this.state.velocidad); //seteamos un intervalo para el movimiento de la serpiente
		document.onkeydown = this.tecla; //recogemos la tecla presionada
	}

	//actualizar
	componentDidUpdate() {
		this.salirsedelarea();
		this.serpientegolpeada();
		this.comer();
	}

	tecla = (tecla) => {
		tecla = tecla || window.event; //cogemos la tecla que pulsamos comprobamos que no presionemos al sentido contrario para no perder automaticamente cuando damos a la flecha contraria
		//flecha arriba
		if (tecla.keyCode === 38 && this.state.direction !== 'abajo') {
			this.setState({ direction: 'arriba' });
			//flecha abajo
		} else if (tecla.keyCode === 40 && this.state.direction !== 'arriba') {
			this.setState({ direction: 'abajo' });
			//flecha izquierda
		} else if (tecla.keyCode === 37 && this.state.direction !== 'der') {
			this.setState({ direction: 'izq' });
			//flecha derecha
		} else if (tecla.keyCode === 39 && this.state.direction !== 'izq') {
			this.setState({ direction: 'der' });
		}
	};

	moversnake = () => {
		//guardar los puntitos del cuerpo de la serpiente
		let bloques = [...this.state.cuerpoSerpiente];
		//cabeza de la serpiente (array length -1 que equivale al último elemento)
		let cabeza = bloques[bloques.length - 1];
		//switch de sleccion de movimiento segun la dirección, el primer array de cabeza contiene el valor x y el segundo el valor de y
		switch (this.state.direction) {
			case 'der':
				cabeza = [cabeza[0] + 5, cabeza[1]]; //para ir a la derecha aumentamos x
				break;

			case 'izq':
				cabeza = [cabeza[0] - 5, cabeza[1]]; //para ir a la izquierda disminuimos x
				break;

			case 'abajo':
				cabeza = [cabeza[0], cabeza[1] + 5]; //para ir abajo aumentamos y
				break;

			case 'arriba':
				cabeza = [cabeza[0], cabeza[1] - 5]; //para ir arriba disminuimos y
				break;

			default:
				break;
		}
		bloques.push(cabeza); //metemos el nuevo valor en el array para la cabeza para indicar el movimiento
		bloques.shift(); //eliminamos el primer elemento del array (la cola de la serpiente)
		this.setState({
			cuerpoSerpiente: bloques
		});
	};

	//funcion de perder, alert y reset
	gameover() {
		alert(`Game Over \nPuntuación: ${this.state.cuerpoSerpiente.length-2}0`);
		this.setState(Inicio);
	}

	//funcion para comprobar si se sale del area la serpiente
	salirsedelarea() {
		let cabeza = this.state.cuerpoSerpiente[this.state.cuerpoSerpiente.length - 1]; //almacenamos en una variable la cabeza de la serpiente
		if (cabeza[0] >= 100 || cabeza[1] >= 100 || cabeza[0] < 0 || cabeza[1] < 0) {//si la posicion de la cabeza esta fuera de los limites vamosa la funcion game over
			this.gameover();
		}
	}

	//funcion que comprueba si la serpiente se ha golpeado a si misma
	serpientegolpeada() {
		let cuerpo = [...this.state.cuerpoSerpiente];//almacenamos la serpiente
		let cabeza = cuerpo[cuerpo.length - 1];//almacenamos la cabeza
		cuerpo.pop();
		cuerpo.forEach((punto) => {
			//comprobamos si la serpiente se golpea a si misma en cada uno de sus puntos
			if (cabeza[0] === punto[0] && cabeza[1] === punto[1]) {
				this.gameover();
			}
		});
	}
	//funcion de comer
	comer() {
		let cabeza = this.state.cuerpoSerpiente[this.state.cuerpoSerpiente.length - 1];
		let fruta = this.state.fruta;
		if (cabeza[0] === fruta[0] && cabeza[1] === fruta[1]) {
			this.setState({
				//actualizamos la posicion de la fruta antes de aumentar el tamaño de la serpiente, si no se crea un bucle infinito
				fruta: coordenadas()
			});
			this.crecer();//aumentamos tamaño serpiente
			this.aumentarvelocidad();//aumentamos velocidad
		}
	}
	crecer() {
		let serp2 = [...this.state.cuerpoSerpiente];
		serp2.unshift([]); //añadimos un nuevo bloque al cuerpo de la serpiente
		this.setState({
			cuerpoSerpiente: serp2 //seteamos el nuevo bloque al cuerpo
		});
	}
	aumentarvelocidad() {
		if (this.state.velocidad > 10) { //velocidad maxima es 10 porque si no es imposible de controlar
			this.setState({
				velocidad: this.state.velocidad - 20 //aumentamos velocidad
			});
		}
	}

	render() {
		return (
			<div className="App">
				<Header />
			<div className="area">
				<Serpiente cuerpoSerpiente={this.state.cuerpoSerpiente} /> <Fruta bloque={this.state.fruta} />{' '}
			</div>
			</div>
		);
	}
}

export default App;
