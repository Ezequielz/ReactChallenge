import { FC } from 'react'

interface Props {
  pokemon: number
}

export const Card: FC<Props> = ({ pokemon }) => {
  return (
    <p key={pokemon} className='text-2xl font-bold text-center'>Pokemon {pokemon}</p>
  )
}
