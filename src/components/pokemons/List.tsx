
import { Card } from '.'
import { usePokemons } from '../../hooks'

export const List = () => {
  const { pokemons } = usePokemons()
  return (
    <section className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5'>
      {pokemons !== undefined
        ? pokemons.map(pokemon => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))
        : <p>asd</p>}
    </section>
  )
}
