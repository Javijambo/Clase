import React, { Component } from 'react';
import '../../../index.css';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo">Snake
                </div>
                <div className="titulo">
                    <a href="/" style={{ color: 'white' }}>Otros juegos</a>
                </div>
            </header>
        );
    }
}