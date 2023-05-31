import { Card } from '.'
import { useAppSelector } from '../../hooks'

export const List = () => {
  const { pokemons } = useAppSelector(state => state.pokemons)
  return (
    <div className='grid grid-cols-8 gap-5 py-5'>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
