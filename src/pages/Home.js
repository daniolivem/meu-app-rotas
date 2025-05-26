// Importa a biblioteca React, necessária para criar componentes React e usar JSX.
import React from 'react';
// Importa o componente Link do react-router-dom para navegação entre rotas sem recarregar a página.
import { Link } from 'react-router-dom';

// Define o componente funcional Home.
// Componentes funcionais são a maneira moderna e recomendada de escrever componentes React.
function Home() {
    // O retorno do componente define o JSX que será renderizado no DOM.
    return (
        // Um elemento div serve como contêiner principal para o conteúdo desta página.
        // Em JSX, um componente deve retornar um único elemento raiz.
        <div>
            {/* Um cabeçalho de nível 1 para o título da página. */}
            <h1>Página Inicial</h1>
            {/* Um parágrafo de boas-vindas. */}
            <p>Bem-vindo à página inicial</p>
            
        </div>
    )
}

// Exporta o componente Home como o padrão deste módulo,
// permitindo que ele seja importado em outros arquivos (por exemplo, no arquivo de configuração de rotas).
export default Home;