import { FC } from 'react'
import { Pokemon } from '../../interfaces/pokemons'

interface Props {
  pokemon: Pokemon
}

export const Card: FC<Props> = ({ pokemon }) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  return (
    <div className='w-full h-full p-2 '>
      <img src={pokemon.sprites.other.dream_world.front_default} className='w-full h-full' alt={`imagen de ${name}`} />
      <p className='text-2xl font-bold text-center'>{name}</p>
    </div>
  )
}
