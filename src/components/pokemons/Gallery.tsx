
import { useEffect } from 'react'
import { PokedexLayout } from '../layouts'
import { List } from './List'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getPokemons } from '../../store/pokemon'

export const Gallery = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <PokedexLayout>
      <div className='px-32 py-5'>
        <h1 className='text-2xl font-bold text-center'>Gallery</h1>
        {
          isLoading
            ? (<div>Loading...</div>)
            : (<List />)
        }

      </div>
    </PokedexLayout>
  )
}
