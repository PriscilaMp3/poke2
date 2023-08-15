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
      {Listevolution.map((evolution) => (
        <li>{evolution.name}</li>
        // <li>{evolution.name}</li>
      ))}
    </div>
  );
}

export default Paginaevoluciones;
