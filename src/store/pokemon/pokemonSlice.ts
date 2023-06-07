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
  errors: string | null
}

const initialState: PokemonState = {
  offset: 1,
  pokemons: [],
  isLoading: false,
  types: [],
  filters: [],
  selected: [],
  search: '',
  errors: null
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
      state.pokemons = action.payload.pokemons
      state.errors = null
    },
    setPokemonsWhitType: (state, action) => {
      state.pokemons = action.payload
      state.errors = null
    },
    setPokemonsTypes: (state, action) => {
      state.types = action.payload.types
    },
    setFilters: (state, action) => {
      state.filters = action.payload
      state.offset = 0
    },
    deletePokemon: (state, action) => {
      state.pokemons = state.pokemons.filter(
        (pokemon) => pokemon.name !== action.payload
      )
    },
    setSearch: (state, action) => {
      state.search = action.payload
      state.errors = null
    },
    setSelected: (state, action) => {
      state.selected = action.payload
    },
    setOffset: (state, action) => {
      state.offset = action.payload
    },
    setErrors: (state, action) => {
      state.errors = action.payload
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
  deletePokemon,
  setErrors,
  setFilters,
  setOffset,
  setPokemons,
  setPokemonsWhitType,
  setPokemonsTypes,
  setSearch,
  setSelected,
  nextPage,
  prevPage
} = pokemonSlice.actions
