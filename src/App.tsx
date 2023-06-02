
import { useEffect } from 'react'
import { Gallery } from './components/pokemons'
import { useAppDispatch } from './hooks'
import { startGetPokemons, startGetPokemonsTypes } from './store/pokemon'

function App () {
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
