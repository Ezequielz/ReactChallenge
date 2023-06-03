
import { pokeApi } from '../api'
import { Pokemon, PokemonFullResponse, PokemonListResponse, TypesResponse } from '../interfaces/pokemons'

export const getPokemons = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=3000&offset=0')
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
  const { sprites, weight, id, types } = data
  return { id, sprites, weight, types }
}

export const getPokemonsTypes = async () => {
  const { data } = await pokeApi.get<TypesResponse>('/type')
  return data.results
}
