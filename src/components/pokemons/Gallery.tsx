/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { PokedexLayout } from '../layouts'
import { List } from './List'
import { useAppSelector, usePokemons } from '../../hooks'
import { AiFillDelete, AiFillCaretDown } from 'react-icons/ai'
import { BsFilterLeft } from 'react-icons/bs'
import { MdOutlineRestore } from 'react-icons/md'
import { Search, SidenavLeft } from '../ui'

export const Gallery = () => {
  const { isLoading, selected, search } = useAppSelector(state => state.pokemons)
  const { handleDelete, handleReset, pokemonsInStorage, nextPage } = usePokemons()

  return (
    <PokedexLayout>
      <div className='px-5 sm:px-10 md:px-20 lg:px-32 py-5'>
        <header>
          {/* <h1 className='xs:text-2xl font-bold text-center font-pokemon '>Gallery</h1> */}
          <div className='w-[100%] sm:w-[40%] mx-auto '>
            <Search />
          </div>
          <div className='flex justify-between items-center sm:mt-[-42px]'>
            <SidenavLeft />
            <button
              className='flex items-center bg-blue-700 text-white px-2 py-1 rounded-md hover:bg-blue-600'
              data-te-sidenav-toggle-ref
              data-te-target='#sideLeft'
              aria-controls='#sideLeft'
              aria-haspopup='true'
            >
              <BsFilterLeft />
              <span className='hidden xs:block'>Filters</span>
            </button>
            <div className='flex items-center gap-1'>
              {selected.length > 0 &&
                <button
                  className='flex items-center bg-red-700 text-white px-2 py-1 rounded-md hover:bg-red-600'
                  onClick={handleDelete}
                >
                  <AiFillDelete />
                  <span className='hidden xs:block'>Delete</span>
                </button>}
              <div />
              {pokemonsInStorage.length > 0 &&
                <button
                  className=' flex items-center bg-green-700 text-white px-2 py-1 rounded-md hover:bg-green-600'
                  onClick={handleReset}
                >
                  <MdOutlineRestore />
                  <span className='hidden xs:block'>Restore</span>
                </button>}
            </div>

          </div>
        </header>
        <main>
          <List />
        </main>
        {!isLoading && search === '' &&
          <footer className='flex justify-center'>

            <button onClick={nextPage} className='animate-bounce flex items-center bg-blue-700 text-white px-2 py-2 rounded-3xl hover:bg-blue-600'>
              <AiFillCaretDown className='' />
            </button>

          </footer>}

      </div>
    </PokedexLayout>
  )
}
