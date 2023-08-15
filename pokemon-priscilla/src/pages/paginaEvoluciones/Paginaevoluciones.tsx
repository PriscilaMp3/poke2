import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getEvolutionChain } from "../../api/poke";

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
    <div>
      <div className="container"></div>
      {Listevolution.map((evolution, i) => (
        <div key={i}>
          {evolution.name}
          <img src={evolution.sprites.front_shiny} />
        </div>
      ))}
    </div>
  );
}

export default Paginaevoluciones;
