/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Generation } from '../../interfaces/pokemonTypeResponse'
import { Pokemon, Species } from '../../interfaces/pokemons'
import { getPokemons, getPokemonsTypes, getPokemonsWhithTypes } from '../../services/pokemonService'
import { setPokemons, loadingPokemons, setPokemonsTypes, deletePokemon, setPokemonsWhitType } from './pokemonSlice'
let pokemonsInStorage: string[] = []
if (localStorage.getItem('deletedPokemons')) {
  pokemonsInStorage = JSON.parse(localStorage.getItem('deletedPokemons')!)
}
export const startGetPokemons = (offset: number) => {
  return async (dispatch: any, getState: any) => {
    // dispatch(loadingPokemons())
    let pokemonStore = []
    let newPokemons: Pokemon[]
    try {
      newPokemons = await getPokemons(20 + pokemonsInStorage.length, offset)
      if (pokemonsInStorage) {
        const filteredPokemons = newPokemons.filter((pokemon) => {
          return !pokemonsInStorage.some((filter: string) => filter === pokemon.name)
        })
        newPokemons = filteredPokemons
      }
      let pokemons: Pokemon[] = newPokemons

      if (offset >= 20) {
        pokemonStore = getState().pokemons.pokemons
      }

      if (pokemonStore) {
        pokemons = [...pokemonStore, ...newPokemons]
      }
      console.log(pokemons)
      dispatch(setPokemons({ pokemons }))
    } catch (error) {
      console.log(error)
    }
  }
}
export const startGetPokemonWhithName = (name: string) => {
  return async (dispatch: any) => {
    try {
      const pokemons = [{ name }]

      dispatch(setPokemons({ pokemons }))
    } catch (error) {
      console.log(error)
    }
  }
}
export const startGetPokemonsWhithTypes = (offset: number) => {
  return async (dispatch: any, getState: any) => {
    let pokemonStore = []
    let newPokemons: Generation[]
    const types = getState().pokemons.filters

    try {
      newPokemons = await getPokemonsWhithTypes(20, offset, types)
      if (pokemonsInStorage) {
        const filteredPokemons = newPokemons.filter((pokemon) => {
          return !pokemonsInStorage.some((filter: string) => filter === pokemon.name)
        })
        newPokemons = filteredPokemons
      }

      let pokemons: Generation[] = newPokemons

      if (offset >= 20) {
        pokemonStore = getState().pokemons.pokemons
      }

      if (pokemonStore) {
        pokemons = [...pokemonStore, ...newPokemons]
      }
      dispatch(setPokemonsWhitType(pokemons))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startRestorePokemons = () => {
  return async (dispatch: any) => {
    localStorage.removeItem('deletedPokemons')
    dispatch(setPokemons([]))
    dispatch(startGetPokemons(0))
  }
}
export const startDeletePokemon = (pokemons: string[]) => {
  return async (dispatch: any) => {
    for (const pokemon of pokemons) {
      dispatch(deletePokemon(pokemon))
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
