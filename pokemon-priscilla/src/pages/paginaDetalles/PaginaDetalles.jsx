import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getPokemon } from "../../api/poke.js";
import { ProgressBar } from "react-bootstrap";
import "./Detalles.css";

const PaginaDetalles = () => {
  const [Pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const parametros = useParams();
  const { id } = useParams();
  const pokemonid = parametros.id;

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemonDetails = await getPokemon(id);
      setPokemon(pokemonDetails);
    };
    fetchPokemonsData();
  }, [id]);

  function volverInicio() {
    navigate("/"); //para volver ala pagina de inicio//
  }
  function irEvoluciones() {
    navigate("/evoluciones/" + id);
  }
  return (
    <div className="paginadetalles">
      <div className="pokedexcontainer">
        {Pokemon?.name && (
          <div id="pokedex">
            <div class="sensor">
              <button></button>
            </div>
            <div class="camera-display">
              {Pokemon.sprites && (
                <img
                  src={Pokemon.sprites.other.home.front_default}
                  alt={`Imagen de ${Pokemon.name}`}
                />
              )}
            </div>
            <div class="divider"></div>
            <div class="stats-display">
              <p>ID: {Pokemon.id}</p>
              <h2>{Pokemon.name}</h2>
              <h3>Abilities</h3>
              <ul>
                {Pokemon.abilities.map((habilidad) => (
                  <li>{habilidad.ability.name}</li>
                ))}
              </ul>
              <h3>Experience</h3>
              <p>Experience: {Pokemon.base_experience}</p>
              <ul>
                <p>
                  Weight:<br></br>
                  {Pokemon.weight / 10}Kg
                </p>
                <p>Height:{Pokemon.height}cm</p>
                <p>
                  Ataque:{" "}
                  <ProgressBar
                    label={`${Pokemon.stats?.[1]?.base_stat}%`}
                    variant="success"
                    now={Pokemon.stats?.[1]?.base_stat}
                  />{" "}
                </p>
                <p>
                  Velocidad:
                  <ProgressBar
                    label={`${Pokemon.stats?.[5]?.base_stat}%`}
                    variant="warning"
                    now={Pokemon.stats?.[5]?.base_stat}
                  />
                </p>
                <p>
                  Defensa:{" "}
                  <ProgressBar
                    label={`${Pokemon.stats?.[2]?.base_stat}%`}
                    variant="info"
                    now={Pokemon.stats?.[2]?.base_stat}
                  />
                </p>
                <p>
                  Salud:
                  <ProgressBar
                    label={`${Pokemon.stats?.[0]?.base_stat}%`}
                    variant="danger"
                    now={Pokemon.stats?.[0]?.base_stat}
                  />
                </p>
              </ul>
            </div>
            <div class="botom-actions">
              <div id="actions">
                <button class="a"></button>
              </div>
              <div id="cross">
                <button class="cross-button up"></button>
                <button class="cross-button right"></button>
                <button class="cross-button down"></button>
                <button class="cross-button left"></button>
                <div class="cross-button center"> </div>
              </div>
            </div>
            <div class="input-pad">
              <input />
            </div>

            <div class="bottom-modes">
              <button class="level-button"></button>
              <button class="level-button"></button>
              <button class="level-button"></button>
              <button class="level-button"></button>

              <button onClick={volverInicio} class="pokedex-mode black-button">
                Start
              </button>
              <button
                onClick={irEvoluciones}
                className="game-mode black-button"
              >
                Evolutions
              </button>
            </div>
          </div>
        )}

        {/* <h1>Detalles Pokémon {id} </h1> */}
        {/* <button onClick={volverInicio}> Ir a Inicio</button> */}
        {/* <Link to={"/"}> Ir a Inicio</Link> */}
      </div>
    </div>
  );
};

export default PaginaDetalles;
