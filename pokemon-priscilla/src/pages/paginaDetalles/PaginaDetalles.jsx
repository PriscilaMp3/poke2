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
  return (
    <div>
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
            <h2>{Pokemon.name}</h2>
            <h3>Abilities</h3>
            <ul>
              {Pokemon.abilities.map((habilidad) => (
                <li>{habilidad.ability.name}</li>
              ))}
            </ul>
            <h3>Moves</h3>
            <ul>
              <li>dragon-rage</li>
              <li>dragon-breath</li>
              <li>dragon-claw</li>
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

            <button class="pokedex-mode black-button">Pokedex</button>
            <button class="game-mode black-button">Game</button>
          </div>
        </div>
      )}

      <h1>Detalles Pokémon {id} </h1>
      <button onClick={volverInicio}> Ir a Inicio</button>
      <Link to={"/"}> Ir a Inicio</Link>
      <div className="pokedex">
        <div className="sensor">
          <button></button>
        </div>
        <div class="camera-display">
          <div className="img"></div>
          <div className="divider"></div>
          <div className="stats-display"></div>
          <p>ID: {Pokemon.id}</p>
          <p> Nombre: {Pokemon.name}</p>
          <p>Experiencia: {Pokemon.base_experience}</p>
          <p>
            Peso:<br></br>
            {Pokemon.weight / 10}Kg
          </p>
          <p>Tamaño:{Pokemon.height}cm</p>

          <div className="stats">
            <h3 className="title">Estadisticas:</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaDetalles;
