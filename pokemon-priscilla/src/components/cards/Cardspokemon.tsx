import React from "react";
import "./CardPokemon.css";

interface PokemonCardProps {
  name: string;
  imageUrl: string;
}

const PokemonCard = ({ name, imageUrl }: PokemonCardProps) => {
  return (
    <div className="card">
      <div className="pokemon-card">
        <div className="content">
          <img className="pokemon-image" src={imageUrl} alt={name} />
          <p className="pokemon-name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
