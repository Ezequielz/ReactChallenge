/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon, Species } from '../../interfaces/pokemons'
import { getPokemons, getPokemonsTypes } from '../../services/pokemonService'
import { setPokemons, loadingPokemons, setPokemonsTypes } from './pokemonSlice'

export const startGetPokemons = () => {
  return async (dispatch: any) => {
    dispatch(loadingPokemons())

    let pokemons: Pokemon[]
    // const oldPokemonsData = getState().pokemons.pokemons
    const pokemonsInLocalStorage = JSON.parse(localStorage.getItem('pokemons') ?? '')

    try {
      pokemons = await getPokemons()
      // pokemons = [...oldPokemonsData, ...pokemons]

      if (pokemonsInLocalStorage) {
        const filteredPokemons = pokemons.filter((pokemon) => {
          return !pokemonsInLocalStorage.some((filter: Pokemon) => filter.id === pokemon.id)
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
