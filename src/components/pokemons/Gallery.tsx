
import { useEffect } from 'react'
import { PokedexLayout } from '../layouts'
import { List } from './List'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { startGetPokemons, startGetPokemonsTypes } from '../../store/pokemon'

export const Gallery = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(startGetPokemons())
  }, [])

  useEffect(() => {
    dispatch(startGetPokemonsTypes())
  }, [])

  const nextPage = () => {
    dispatch(startGetPokemons())
  }
  // const prevPage = () => {
  //   dispatch(startGetPokemons(offset - 1))
  // }

  return (
    <PokedexLayout>
      <div className='px-2 lg:px-32 py-5'>
        <h1 className='text-2xl font-bold text-center font-pokemon'>Gallery</h1>
        {
          isLoading
            ? (<div>Loading...</div>)
            : (<List />)
        }
        <div className='flex justify-center'>
          <button onClick={nextPage}>Load more</button>
        </div>

      </div>
    </PokedexLayout>
  )
}
