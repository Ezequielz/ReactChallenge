/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '../../interfaces/pokemons'
import { getAllPokemons } from '../../services/pokemonService'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  return async (dispatch: any) => {
    dispatch(startLoadingPokemons())
    let data: Pokemon[]
    try {
      data = await getAllPokemons()
    } catch (error) {
      data = []
    }

    dispatch(setPokemons({ pokemons: data, page: page + 1 }))
  }
}
