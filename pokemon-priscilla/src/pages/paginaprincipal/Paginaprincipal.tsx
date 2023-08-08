import React, { useEffect, useState } from "react";
import { getPokelist } from "../../api/poke";
import { useNavigate, Link } from "react-router-dom";
import PokemonCard from "../../components/cards/Cardspokemon";
import "./Paginaprincipal.css";

function Paginaprincipal() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  async function loadPokemon() {
    const datosPoke = await getPokelist(1);
    console.log("Pokemon", datosPoke);
    setPokemons(datosPoke);
  }
  useEffect(() => {
    loadPokemon();
  }, []);

  const navigate = useNavigate();
  const Detalles = (id: number) => {
    navigate("/pokemon/" + id);
  };

  return (
    <div>
      <h1>Pagina Principal</h1>
      <div>
        <div className="pokemon-list">
          {pokemons.map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <PokemonCard name={pokemon.name} imageUrl={pokemon.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Paginaprincipal;
