import { createSlice } from '@reduxjs/toolkit'
import { Pokemon, Species } from '../../interfaces/pokemons'

interface PokemonState {
  offset: number
  pokemons: Pokemon[]
  isLoading: boolean
  types: Species[]
  filters: string[]
  selected: string[]
  search: string
}

const initialState: PokemonState = {
  offset: 0,
  pokemons: [],
  isLoading: false,
  types: [],
  filters: [],
  selected: [],
  search: ''
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    loadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.offset = action.payload.offset
      state.pokemons = action.payload.pokemons
    },
    setPokemonsTypes: (state, action) => {
      state.types = action.payload.types
    },
    setFilters: (state, action) => {
      console.log(action.payload)
      state.filters = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setSelected: (state, action) => {
      state.selected = action.payload
    },
    nextPage: (state) => {
      state.offset += 20
    },
    prevPage: (state) => {
      state.offset -= 20
    }
  }
})

export const {
  loadingPokemons,
  setFilters,
  setPokemons,
  setPokemonsTypes,
  setSearch,
  setSelected,
  nextPage,
  prevPage
} = pokemonSlice.actions
