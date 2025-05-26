// Importa a biblioteca React, fundamental para construir componentes.
import React from 'react';
// Importa componentes do react-router-dom para configurar o roteamento da aplicação.
// - Route: Define um mapeamento entre um caminho de URL e um componente.
// - Routes: Contêiner para múltiplas definições de <Route>. Garante que apenas uma rota seja renderizada por vez.
import { Routes, Route, Outlet } from 'react-router-dom';
// Importa os componentes de página que serão renderizados pelas rotas.
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// Importa o arquivo de estilos CSS específico para o componente App.
import './App.css';

// Define um componente funcional chamado PageLayout.
// Este componente serve como um layout comum para as páginas que compartilham o mesmo cabeçalho e rodapé.
function PageLayout() {
  return (
    <>
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </>

  );
}

// Define o componente funcional principal da aplicação, chamado App.
// Este componente é responsável por configurar a estrutura de roteamento.
function App() {
  // O retorno do componente define a estrutura JSX que será renderizada.
  return (
    // Um div principal que envolve toda a aplicação, com uma classe CSS "App"
    // que pode ser usada para estilização global ou específica do layout do App.
    <div className="App">
      {/*
        O componente <Routes> é usado para agrupar todas as suas definições de <Route>.
        Ele examina todas as suas rotas filhas <Route> e renderiza a primeira que
        corresponde à URL atual.
        Como mencionado acima, o contexto de roteamento (BrowserRouter) já é fornecido
        pelo arquivo `src/index.js` que envolve este componente <App />.
      */}
      <Routes>
        {/* Define uma rota individual:
            - 'path="/"': Especifica o caminho da URL para esta rota (a página inicial).
            - 'element={<Home />}': Especifica o componente React (<Home />) que será
              renderizado quando a URL corresponder a este caminho. */}
        <Route path="/" element={<PageLayout />}>
 
          <Route path="/" element={<Home />} />

        {/* Rota para a página "Sobre".
 - 'path="/about"': Caminho para a página "Sobre".
 - 'element={<About />}': Renderiza o componente <About />. */}
        <Route path="/about" element={<About />} />

        {/* Rota para a página "Contato".
 - 'path="/contact"': Caminho para a página "Contato".
 - 'element={<Contact />}': Renderiza o componente <Contact />. */}
        <Route path="/contact" element={<Contact />} />
        {/* Páginas que não usam o mesmo layout serão inseridas aqui */}
        </Route>
       
      </Routes>
    </div>
  );
}


// Exporta o componente App como o padrão deste módulo.
// Isso permite que ele seja importado e utilizado em outros arquivos,
// principalmente no `src/index.js` que é o ponto de entrada da aplicação.
export default App;
