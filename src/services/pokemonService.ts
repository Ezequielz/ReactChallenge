
import { pokeApi } from '../api'
import { Pokemon, PokemonFullResponse, PokemonListResponse } from '../interfaces/pokemons'

export const getAllPokemons = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=10')
  const pokemonList: Pokemon[] = []

  for (const result of data.results) {
    const { name } = result
    const pokeInfo = await getPokemonInfo(name)
    const pokemonData = {
      name,
      ...pokeInfo
    }
    pokemonList.push(pokemonData)
  }

  return pokemonList
}

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${nameOrId}`)
  const { abilities, sprites, weight, id } = data
  return { id, abilities, sprites, weight }
}
