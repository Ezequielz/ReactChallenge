/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Pokemon, Species } from '../../interfaces/pokemons'
import { getPokemons, getPokemonsTypes } from '../../services/pokemonService'
import { setPokemons, loadingPokemons, setPokemonsTypes } from './pokemonSlice'

export const startGetPokemons = () => {
  return async (dispatch: any) => {
    dispatch(loadingPokemons())

    let pokemons: Pokemon[]
    let pokemonsInStorage: string[] = []
    if (localStorage.getItem('deletedPokemons')) {
      pokemonsInStorage = JSON.parse(localStorage.getItem('deletedPokemons')!)
    }

    try {
      pokemons = await getPokemons()
      if (pokemonsInStorage) {
        const filteredPokemons = pokemons.filter((pokemon) => {
          return !pokemonsInStorage.some((filter: string) => filter === pokemon.name)
        })
        pokemons = filteredPokemons
      }

      dispatch(setPokemons({ pokemons }))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startGetPokemonsTypes = () => {
  return async (dispatch: any) => {
    dispatch(loadingPokemons())

    let types: Species[]
    try {
      types = await getPokemonsTypes()
      if (types) {
        localStorage.setItem('pokemonsTypes', JSON.stringify(types))
        dispatch(setPokemonsTypes({ types }))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
