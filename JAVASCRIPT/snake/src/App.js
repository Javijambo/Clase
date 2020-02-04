import React, { Component } from 'react';
import Snake from './Snake';
import Food from './food';

const coordenadas = () => {
	let min = 1;
	let max = 98;
	let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	return [x, y]
}

const initialState = {
	speed: 300,
	food: coordenadas(),
	direction: 'RIGHT',
	snakeDots: [
		[0, 0],
		[2, 0]
	]
}

class App extends Component {
	state = initialState;

	componentDidMount() {
		setInterval(this.moversnake, this.state.speed);//seteamos un intervalo para el movimiento de la serpiente
		document.onkeydown = this.tecla; //recogemos la tecla presionada
	}


	componentDidUpdate() {
		this.salirsedelarea();
		this.serpientegolpeada();
		this.comer();
	}


	tecla = (e) => {
		e = e || window.event; //cogemos la tecla que pulsamos comprobamos que no presionemos al sentido contrario para no perder automaticamente cuando damos a la flecha contraria
		if (e.keyCode == 38  && this.state.direction!='DOWN') { 
			this.setState({ direction: 'UP' });//flecha arriba
		}
		else if (e.keyCode == 40  && this.state.direction!='UP') {
			this.setState({ direction: 'DOWN' });//flecha abajo
		}
		else if (e.keyCode == 37 && this.state.direction!='RIGHT') {
			this.setState({ direction: 'LEFT' });//flecha izquierda
		}
		else if (e.keyCode == 39 && this.state.direction!='LEFT') {
			this.setState({ direction: 'RIGHT' });//flecha derecha
		}
	}

	moversnake = () => {
		let dots = [...this.state.snakeDots]; //guardar los puntitos del cuerpo de la serpiente
		let head = dots[dots.length - 1]; //cabeza de la serpiente (largura de la serpiente -1 que equivale al último elemento)
		//switch de sleccion de movimiento segun la dirección, el primer array de head contiene el valor x y el segundo el valor de y
		switch (this.state.direction) {
			case 'RIGHT':
				head = [head[0] + 2, head[1]];//para ir a la derecha aumentamos x
				break;
			case 'LEFT':
				head = [head[0] - 2, head[1]];//para ir a la izquierda disminuimos x
				break;
			case 'DOWN':
				head = [head[0], head[1] + 2];//para ir abajo aumentamos y
				break;
			case 'UP':
				head = [head[0], head[1] - 2];//para ir arriba disminuimos y
				break;
		}
		dots.push(head); //metemos el nuevo valor en el array para la cabeza para indicar el movimiento
		dots.shift(); //eliminamos el primer elemento del array (la cola de la serpiente)
		this.setState({
			snakeDots: dots
		})
	}

	//funcion de perder, alert y reset
	gameover() {
		alert("Game Over");
		this.setState(initialState);
	}

	//funcion para comprobar si se sale del area la serpiente
	salirsedelarea() {
		let head = this.state.snakeDots[this.state.snakeDots.length - 1];//almacenamos en una variable la cabeza de la serpiente
		if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
			this.gameover();
		}
	}

	//funcion que comprueba si la serpiente se ha golpeado a si misma
	serpientegolpeada() {
		let snake = [ ...this.state.snakeDots ];
		let head = snake[snake.length - 1];
		snake.pop();
		snake.forEach(dot => {//si la serpiente se golpea a si misma
			if (head[0] == dot[0] && head[1] == dot[1]) {
				this.gameover();
			}
		})
	}
	//funcion de comer
	comer() {
		let head = this.state.snakeDots[this.state.snakeDots.length - 1];
		let food = this.state.food;
		if (head[0] == food[0] && head[1] == food[1]) {
			this.setState({//actualizamos la posicion de la fruta antes de aumentar el tamaño de la serpiente, si no se crea un bucle infinito
				food:coordenadas()
			})
			this.crecer();
			this.aumentarvelocidad();
		}
	}
	crecer(){
		let newSnake=[...this.state.snakeDots];
		newSnake.unshift([])
		this.setState({
			snakeDots:newSnake
		})
	}
	aumentarvelocidad(){
		if(this.state.speed>10){
			this.setState({
				speed: this.state.speed -10
			})
		}
	}
	render() {
		return (
			<div className="game-area">
				<Snake snakeDots={this.state.snakeDots} />
				<Food dot={this.state.food} />
			</div>
		);
	}
}

export default App;
