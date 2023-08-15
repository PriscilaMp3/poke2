export async function getPokelist(paginaprincipal) {
  try {
    const requestPoke = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        (paginaprincipal - 1) * 20
      }&limit=20`
    );

    const pokemonsData = await requestPoke.json();
    const Detallespokemon = await Promise.all(
      pokemonsData.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return {
          id: data.id,
          name: data.name,
          imageUrl: data.sprites.other.home.front_default,
          types: data.types,
          sprites: data.sprites,
        };
      })
    );
    return Detallespokemon;
  } catch (error) {
    console.warn("salio mal el llamado al api");
    return [];
  }
}

export async function getPokemon(id) {
  const requestPoke = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const Pokedata = await requestPoke.json();
  return Pokedata;
}

function getEvolution(list, chain) {
  if (chain.evolves_to.length > 0) {
    for (let index = 0; index < chain.evolves_to.length; index++) {
      const evolution = chain.evolves_to[index];
      list.push(evolution.species.name);
      getEvolution(list, evolution);
    }
  }
  return list;
}

export async function getEvolutionChain(pokemonId) {
  try {
    //Get the species
    const pokemonSpecies = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/" + pokemonId
    );
    const pokemonSpeciesData = await pokemonSpecies.json();
    if (!pokemonSpeciesData?.evolution_chain) {
      return [];
    }
    console.log("Especie", pokemonSpeciesData);

    //Get the evolution
    const requestPokemon = await fetch(pokemonSpeciesData.evolution_chain.url);
    const pokemonData = await requestPokemon.json();

    var evolutionList = [pokemonData.chain.species.name];

    getEvolution(evolutionList, pokemonData.chain);

    console.log("Nombres Evoluciones", evolutionList);

    //Get the images
    var evolutionListData = [];

    for (let index = 0; index < evolutionList.length; index++) {
      const evolution = evolutionList[index];
      const requestPokemon = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + evolution
      );
      const evolutionData = await requestPokemon.json();
      evolutionListData.push(evolutionData);
    }

    console.log("Data Evoluciones", evolutionListData);

    return evolutionListData;
  } catch (error) {
    //Se ejecuta si hubo algun error
    console.error("Hubo un error al llamar al api");
    return [];
  }
}
