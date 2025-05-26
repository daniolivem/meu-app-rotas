// Importa a biblioteca React, essencial para criar componentes React e usar JSX.
import React from 'react';
// Importa o componente Link do react-router-dom para navegação SPA (Single Page Application).
import { Link } from 'react-router-dom';

// Define o componente funcional About.
// Este componente representa a página "Sobre Nós" da aplicação.
function About() {
    // O retorno do componente define a estrutura JSX que será renderizada.
    // É crucial que o JSX retornado tenha um único elemento raiz.
    return (
        // Elemento div usado como contêiner principal para agrupar os elementos da página.
        <div>
            {/* Cabeçalho principal da página "Sobre Nós". */}
            <h1>Sobre Nós</h1>
            {/* Parágrafo introdutório da página. */}
            <p>Bem-vindo à página sobre nossa empresa</p>
       
        </div>
    );
}

// Exporta o componente About como o padrão deste módulo,
// permitindo que ele seja importado e utilizado em outras partes da aplicação, como no sistema de rotas.
export default About;