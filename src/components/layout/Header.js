import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="app-header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/user/1">Usuário 1</Link> {/* Exemplo para rota com parâmetro dinâmico */}
            </nav>
        </header>
    )
}

export default Header;