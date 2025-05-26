import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="app-footer">
            <p>© {new Date().getFullYear()} Meu App Incrível. Todos os direitos reservados a <a href="https://github.com/daniolivem">Dani Oliveira</a>.</p>
        </footer>
    )
}

export default Footer;