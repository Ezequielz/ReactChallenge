
import { useEffect } from 'react'
import { Gallery } from './components/pokemons'
import { useAppDispatch } from './hooks'
import { startGetPokemons, startGetPokemonsTypes } from './store/pokemon'
import {
  Sidenav,
  initTE
} from 'tw-elements'

function App () {
  useEffect(() => {
    initTE({ Sidenav })
  }, [])

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(startGetPokemons())
  }, [])

  useEffect(() => {
    dispatch(startGetPokemonsTypes())
  }, [])

  return (
    <Gallery />
  )
}

export default App
