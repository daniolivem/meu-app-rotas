import React from "react";
import { useParams, Link } from "react-router-dom";
import './UserProfile.css';
 
function UserProfile() {

const { id } = useParams();

return (
    <div className="UserProfile">
      <h1>Perfil do Usuário</h1>
      <p>ID do Usuário: <strong>{id}</strong></p>
      <Link to="/">Voltar para a página inicial</Link>
      <Link to="/user1">Ver Usuário 1</Link>
      <Link to="/user2">Ver Usuário 2</Link>
    </div>
  );
}

export default UserProfile;