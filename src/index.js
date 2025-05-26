// Importa a biblioteca principal do React, essencial para criar componentes e gerenciar a UI.
import React from 'react';
// Importa ReactDOM para interagir com o DOM (Document Object Model) do navegador.
// A importação de 'react-dom/client' é para a nova API de Root do React 18, que suporta recursos concorrentes.
import ReactDOM from 'react-dom/client';
// Importa o arquivo CSS global para estilos que se aplicam a toda a aplicação.
import './index.css';
// Importa o componente principal da aplicação, geralmente chamado App, de './App.js'.
import App from './App';
// Importa o BrowserRouter do 'react-router-dom' para habilitar o roteamento baseado em URL no navegador.
import { BrowserRouter } from 'react-router-dom';

// Obtém o elemento DOM com o id 'root'. Este é o contêiner HTML onde a aplicação React será renderizada.
// Este elemento geralmente está definido no arquivo public/index.html.
const rootElement = document.getElementById('root');

// Cria uma "raiz" React para o elemento DOM obtido.
// Esta é a nova maneira de inicializar uma aplicação React a partir do React 18.
const root = ReactDOM.createRoot(rootElement);

// Renderiza a aplicação React dentro da raiz.
root.render(
  // React.StrictMode é uma ferramenta para destacar potenciais problemas na aplicação durante o desenvolvimento.
  // Ele ativa verificações e avisos extras, mas não afeta a build de produção.
  <React.StrictMode>
    {/* BrowserRouter envolve a aplicação para fornecer funcionalidades de roteamento.
        Todos os componentes que usam recursos de roteamento (como Link, Route, Routes)
        precisam estar dentro de um componente de roteador. */}
    <BrowserRouter>
      {/* Renderiza o componente principal da aplicação. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);