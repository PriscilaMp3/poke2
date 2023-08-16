import React, { useEffect, useState } from "react";
import { getPokelist, getPokemon } from "../../api/poke";
import { useNavigate, Link } from "react-router-dom";
import PokemonCard from "../../components/cards/Cardspokemon";
import "./Paginaprincipal.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";

function Paginaprincipal() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [paginaInicio, setpaginaInicio] = useState<number>(1); //pagina
  const [searchedPoke, setsearchedPoke] = useState<any>();
  const [search, setsearch] = useState<string>("");

  async function loadPokemon() {
    const datosPoke = await getPokelist(1);
    setPokemons(datosPoke);
  }
  useEffect(() => {
    loadPokemon();
  }, []);

  const navigate = useNavigate();
  const Detalles = (id: number) => {
    navigate("/pokemon/" + id);
  };

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemonDetails = await getPokelist(paginaInicio); //pagina//
      setPokemons(pokemonDetails);
    };
    fetchPokemonsData();
  }, [paginaInicio]);

  const saltoPagina = (page: number) => {
    //pagina
    setpaginaInicio(page);
  };

  const handleSearch = async () => {
    const pokemonBuscar = await getPokemon(search);
    console.log(pokemonBuscar);
    if (pokemonBuscar) {
      setsearchedPoke(pokemonBuscar);
    } else {
      setsearchedPoke(null);
    }
  };

  return (
    <div>
      <NavBar search={setsearch} searchpoke={handleSearch} />
      {searchedPoke && (
        <Link to={`/pokemon/${searchedPoke.id}`} className="link">
          <PokemonCard
            name={searchedPoke.name}
            imageUrl={
              searchedPoke.sprites.versions["generation-v"]["black-white"][
                "animated"
              ].front_default
            }
            types={searchedPoke.types}
          />
        </Link>
      )}
      {!searchedPoke && (
        <div>
          <div className="pokemon-list">
            {pokemons.map((pokemon) => (
              <Link
                key={pokemon.id}
                to={`/pokemon/${pokemon.id}`}
                className="link"
              >
                <PokemonCard
                  name={pokemon.name}
                  imageUrl={
                    pokemon.sprites.versions["generation-v"]["black-white"][
                      "animated"
                    ].front_default
                  }
                  types={pokemon.types}
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer paginaInicio={paginaInicio} cambioPagina={saltoPagina} />
    </div>
  );
}

export default Paginaprincipal;
