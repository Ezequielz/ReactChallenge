/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { pokeApi } from '../api'
import { Generation, PokemonTypeResponse } from '../interfaces/pokemonTypeResponse'
import {
  // Pokemon,
  PokemonFullResponse,
  PokemonListResponse,
  TypesResponse
} from '../interfaces/pokemons'

export const getPokemons = async (limit = 20, offset = 0) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`)
  return data.results
}

export const getPokemonsWhithTypes = async (limit = 20, offset = 21, types: string[]) => {
  const pokemonsWhithType: Generation[] = []

  for (const type of types) {
    const { data } = await pokeApi.get<PokemonTypeResponse>(`/type/${type}`)

    data.pokemon.map((pokemon) => pokemonsWhithType.push(pokemon.pokemon))
  }
  const ocurrencias: { [key: string]: number } = {}

  const pokemonsWhithTypeWhithoutDoublons = pokemonsWhithType.filter((obj) => {
    const name = obj.name
    ocurrencias[name] = (ocurrencias[name] || 0) + 1
    return ocurrencias[name] === 1
  })
  pokemonsWhithTypeWhithoutDoublons.sort((a, b) => +a.url.split('/')[6] - +b.url.split('/')[6])

  const startIndex = offset
  const endIndex = startIndex + limit
  const pokemons = pokemonsWhithTypeWhithoutDoublons.slice(startIndex, endIndex)

  return pokemons
}

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${nameOrId}`)
    const { sprites, weight, id, types } = data
    return { id, sprites, weight, types }
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonsTypes = async () => {
  const { data } = await pokeApi.get<TypesResponse>('/type')
  return data.results
}
