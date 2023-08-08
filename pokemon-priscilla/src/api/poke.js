
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
        };
      })
    );
    return Detallespokemon;
  } catch (error) {
    console.warn("salio mal el api")
    return [];
  }
}
