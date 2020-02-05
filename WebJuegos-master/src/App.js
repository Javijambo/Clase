import React from 'react';
import Tetris from './components/Tetris/Tetris';
import HomePage from './components/HomePage';
import Memory from './components/Memory/App/App';
import Snake from './components/Snake/App'

var ruta = window.location.pathname;
var renderizado;
if (ruta === "/") {
  renderizado = <HomePage />;
} else if (ruta === "/Tetris") {
  renderizado = <Tetris />;
} else if (ruta === "/Memory") {
  renderizado = <Memory />;
} else if (ruta === "/Snake") {
  renderizado = <Snake />;
}

const App = () => (
  <div className="App">
    {renderizado}
  </div>
);

export default App;