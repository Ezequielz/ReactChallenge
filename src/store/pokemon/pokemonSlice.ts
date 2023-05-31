import { createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../interfaces/pokemons'

interface PokemonState {
  page: number
  pokemons: Pokemon[]
  isLoading: boolean
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  }
})

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
