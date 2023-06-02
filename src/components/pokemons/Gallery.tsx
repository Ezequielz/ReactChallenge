/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { PokedexLayout } from '../layouts'
import { List } from './List'
import { useAppSelector, usePokemons } from '../../hooks'
import { AiFillDelete } from 'react-icons/ai'

export const Gallery = () => {
  const { isLoading, selected } = useAppSelector(state => state.pokemons)
  const { handleDelete, handleReset, pokemonsInStorage, nextPage } = usePokemons()

  return (
    <PokedexLayout>
      <div className='px-2 lg:px-32 py-5'>
        {selected.length > 0 &&
          <div className='relative'>
            <button
              className='absolute top-0 right-0 flex items-center bg-red-700 text-white px-2 py-1 rounded-md hover:bg-red-600'
              onClick={handleDelete}
            >
              Delete Selection
              <AiFillDelete className='ml-1' />
            </button>
          </div>}
        {pokemonsInStorage.length > 0 &&
          <div className='relative'>
            <button
              className='absolute flex items-center bg-green-700 text-white px-2 py-1 rounded-md hover:bg-green-600'
              onClick={handleReset}
            >
              Restablecer
            </button>
          </div>}
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
