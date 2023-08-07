
export async function getPoke(Paginaprincipal) {
    try {
 const requestPoke = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${
    (paginaprincipal - 1) * 20
  }&limit=20`);

  const pokemonData = await requestPoke.json();
  return pokemonData;

    }catch (error) 
}

      const pokemonsData = data.results;
      const Detallespokemon = await Promise.all(
        pokemonsData.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return {
            id: data.id,
            name: data.name,
            imageUrl: data.sprites.other.home.front_default,
            
            
          };
        })
      );
      return Detallespokemon;
    } catch (error) {
      return [];
    }
  };
  
  export default Apipokemon;
  