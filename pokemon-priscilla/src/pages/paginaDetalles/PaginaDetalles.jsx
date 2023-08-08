import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function PaginaDetalles() {
  const navigate = useNavigate();
  const { id } = useParams();

  function volverInicio() {
    navigate("/"); //para volver ala pagina de inicio//
  }
  return (
    <div>
      <h1>Detalles Pokémon {id} </h1>
      <button onClick={volverInicio}> Ir a Inicio</button>
      <Link to={"/"}> Ir a Inicio</Link>
    </div>
  );
}

export default PaginaDetalles;
