import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
    <div>
      <h1>
        <p>404 - Página não encontrada</p>
      </h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default NotFound;