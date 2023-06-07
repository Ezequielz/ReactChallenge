
import { useEffect } from 'react'
import { Gallery } from './components/pokemons'
import { useAppDispatch, useAppSelector } from './hooks'
import { startGetPokemonWhithName, startGetPokemons, startGetPokemonsTypes, startGetPokemonsWhithTypes } from './store/pokemon'
import {
  Sidenav,
  initTE
} from 'tw-elements'

function App () {
  useEffect(() => {
    initTE({ Sidenav })
  }, [])
  const dispatch = useAppDispatch()
  const { offset, filters, search } = useAppSelector(state => state.pokemons)

  useEffect(() => {
    if (filters.length >= 1 && search === '') {
      console.log('a')
      dispatch(startGetPokemonsWhithTypes(offset))
    } else if (search !== '') {
      console.log('b')
      dispatch(startGetPokemonWhithName(search))
    } else {
      console.log('asd')
      dispatch(startGetPokemons(offset))
    }
  }, [offset, filters, search])

  useEffect(() => {
    dispatch(startGetPokemonsTypes())
  }, [])

  return (
    <Gallery />
  )
}

export default App
