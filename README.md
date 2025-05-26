# Atividade de Fixação: Rotas e Componentes em React (GTONLINE2)

Este projeto é uma atividade de fixação desenvolvida para praticar e entender os conceitos de roteamento e componentização em aplicações React utilizando a biblioteca React Router. O objetivo é simular um website simples com múltiplas páginas, aplicando boas práticas de desenvolvimento e otimização de performance.

## Objetivos da Atividade Cumpridos

* Configuração do React Router.
* Criação de componentes de página.
* Utilização do componente de Rotas (`<Routes>`, `<Route>`).
* Implementação de links de navegação (`<Link>`).
* Trabalho com componentes de layout (Header, Footer) e o uso do `<Outlet>`.
* Melhoria de performance com lazy loading (`React.lazy` e `React.Suspense`).
* Tratamento de rotas inválidas (página 404).
* Utilização de parâmetros de URL (ex: `/user/:id`) e o hook `useParams`.
* Criação de um componente `Header` com navegação principal.

## Funcionalidades Implementadas

* Navegação entre três páginas principais: Início (Home), Sobre (About) e Contato (Contact).
* Layout consistente com Cabeçalho (Header) e Rodapé (Footer) presentes em todas as páginas.
* Carregamento otimizado das páginas (Lazy Loading) para melhor performance inicial.
* Página de "Não Encontrado" (404) para URLs inválidas.
* Página de Perfil de Usuário que exibe um ID dinâmico obtido da URL (ex: `/user/123`).
* Navegação principal centralizada no componente Header.

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **React Router DOM (v6):** Para gerenciamento de rotas declarativas em aplicações React.
* **Create React App:** Para a estrutura inicial e configuração do ambiente de desenvolvimento.
* **JavaScript (ES6+):** Linguagem de programação base.
* **HTML5 & CSS3:** Para estrutura e estilização (básica).

## Estrutura do Projeto (dentro de `src/`)

src/
├── App.css             # Estilos globais para App
├── App.js              # Componente principal da aplicação, configuração das rotas
├── index.css           # Estilos globais
├── index.js            # Ponto de entrada da aplicação, configuração do BrowserRouter
├── components/
│   ├── layout/         # Componentes de layout reutilizáveis
│   │   ├── Header.js
│   │   ├── Header.css  # Estilos para o Header
│   │   ├── Footer.js
│   │   └── Footer.css  # Estilos para o Footer
│   └── ui/             # Componentes de UI genéricos
│       └── Loading.js  # Componente de fallback para Suspense
└── pages/              # Componentes que representam páginas da aplicação
        ├── Home.js
        ├── About.js
        ├── Contact.js
        ├── UserProfile.js
        └── NotFound.js


## Como Executar o Projeto Localmente

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* npm (geralmente vem com o Node.js) ou Yarn

### Passos

1.  **Clone o repositório (se estiver no GitHub):**
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
    cd NOME_DO_REPOSITORIO
    ```
    Ou, se você seguiu o tutorial localmente, apenas navegue até a pasta do projeto:
    ```bash
    cd meu-app-rotas
    ```

2.  **Instale as dependências:**
    Dentro da pasta do projeto, execute:
    ```bash
    npm install
    ```
    ou, se estiver usando Yarn:
    ```bash
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
    ou
    ```bash
    yarn start
    ```
    Isso abrirá o aplicativo no seu navegador padrão, geralmente em `http://localhost:3000`.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

* `npm start`: Executa o aplicativo em modo de desenvolvimento.
* `npm test`: Inicia o executor de testes no modo interativo.
* `npm run build`: Compila o aplicativo para produção na pasta `build`.
* `npm run eject`: Remove a dependência única de configuração (`react-scripts`) do seu projeto. **Atenção:** esta é uma operação irreversível!

## Conceitos Chave Demonstrados

* **`BrowserRouter`**: Envolve a aplicação para habilitar a API de roteamento.
* **`<Routes>` e `<Route>`**: Definem as diferentes rotas da aplicação, mapeando caminhos de URL para componentes React.
* **`<Link to="...">`**: Componente para navegação declarativa e acessível entre rotas, evitando recarregamento da página.
* **`<Outlet>`**: Usado em componentes de layout de rota pai para renderizar suas rotas filhas.
* **`React.lazy()`**: Permite definir um componente que será carregado dinamicamente (lazy load).
* **`<React.Suspense fallback={...}>`**: Permite especificar uma UI de carregamento (fallback) enquanto os componentes lazy-loaded estão sendo carregados.
* **`useParams()`**: Hook para acessar os parâmetros de rotas dinâmicas (ex: `/:id`).
* **Componentização**: Divisão da UI em componentes reutilizáveis (Header, Footer, páginas).

---

Desenvolvido como parte da atividade de fixação da GTONLINE2.