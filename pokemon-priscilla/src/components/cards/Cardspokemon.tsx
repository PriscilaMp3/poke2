import React from "react";
import "./CardPokemon.css";
import { getTypeColor } from "../../utils/pokemonTypeColor";

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  types: any[];
}

const PokemonCard = ({ name, imageUrl, types }: PokemonCardProps) => {
  return (
    <div className="card">
      <div className="pokemon-card">
        <div className="content">
          <img className="pokemon-image" src={imageUrl} alt={name} />
          <p className="pokemon-name">{name}</p>
          <ul>
            {types.map((type, index) => (
              <li
                className="types"
                style={{ backgroundColor: getTypeColor(type.type.name) }}
                key={index}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
