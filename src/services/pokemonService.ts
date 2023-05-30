
import { pokeApi } from '../api'
import { Pokemon, PokemonFullResponse, PokemonListResponse } from '../interfaces/pokemons'

export const getAllPokemons = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=100000')

  const newList = data.results.map(async (pokemon, index) => {
    const { abilities, name, sprites, weight } = await getPokemonInfo(pokemon.name)

    const newPokemon: Pokemon = {
      id: index + 1,
      abilities,
      name,
      sprites,
      weight
    }
    return newPokemon
  })

  return newList
}

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${nameOrId}`)
  return data
}
