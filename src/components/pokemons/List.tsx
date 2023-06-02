
import { Card } from '.'
import { usePokemons } from '../../hooks'

export const List = () => {
  const { pokemons } = usePokemons()
  return (
    <div className='grid grid-cols-2 lg:grid-cols-5 gap-5 py-5'>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />

      ))}
    </div>
  )
}
