import React, { Component } from 'react';
import './styles/StyledHeader.css';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo">Tetris</div>
                <div className="titulo">
                    <a href="/" style={{ color: 'white' }}>Otros juegos</a>
                </div>
            </header>
        );
    }
}