import { FC } from 'react'
import { Pokemon } from '../../interfaces/pokemons'
import './card.css'
interface Props {
  pokemon: Pokemon
}

export const Card: FC<Props> = ({ pokemon }) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  return (
    <div
      className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-700'
    >
      <div className='px-6 py-2'>
        <h5
          className='mb-2 text-xl font-medium font-pokemon tracking-widest text-neutral-800 dark:text-neutral-50 text-center'
        >
          {name}
        </h5>
        <div className=' '>
          <img
            className='rounded-t-lg h-32 m-auto'
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={`imagen de ${name}`}
          />
        </div>

      </div>

      <div className='bg-slate-900 p-2 rounded-b-lg text-slate-100'>
        <div className='text-center'>
          <ul className='flex flex-row justify-center'>
            {pokemon.types.map((type) => (
              <li key={type.slot} className='ml-2'>
                <div
                  className={`${type.type.name} items-center  rounded-[10px]  px-[10px] py-0 text-sm font-bold tracking-wide`}
                >
                  {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <span className='flex justify-center font-bold'>Weight: {pokemon.weight}</span>
      </div>

    </div>
  )
}
