import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getEvolutionChain } from "../../api/poke";
import "./evoluciones.css";

function Paginaevoluciones() {
  const navigate = useNavigate();
  const parametros = useParams();
  const { id } = useParams();

  const [Listevolution, setListevolution] = useState<any[]>([]);
  async function getEvoluciones() {
    const datosEvoluciones = await getEvolutionChain(id);
    setListevolution(datosEvoluciones);
  }
  useEffect(() => {
    getEvoluciones();
  }, [id]);

  return (
    <div className="cardevolution">
      <div className="container"></div>
      {Listevolution.map((evolution, i) => (
        <div key={i} className="div-details">
          {evolution.name}
          <img
            className="evolution"
            src={evolution.sprites.other.home.front_default}
          />
        </div>
      ))}
    </div>
  );
}

export default Paginaevoluciones;
