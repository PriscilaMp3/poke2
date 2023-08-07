import React, { useEffect } from "react";
import { getPoke } from "../../api/poke";

function Paginaprincipal() {
  async function loadPokemon() {
    const datosPoke = await getPoke();
    console.log("Pokemon", datosPoke);
  }
  useEffect(() => {
    loadPokemon();
  }, []);

  return <div>Pagina Principal</div>;
}

export default Paginaprincipal;
