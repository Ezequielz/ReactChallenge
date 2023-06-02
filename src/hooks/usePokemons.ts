import { useEffect, useState } from 'react'
import { useAppSelector } from '.'

export function usePokemons () {
  const { pokemons: allPokemons, filters, search } = useAppSelector(state => state.pokemons)

  const [pokemons, setPokemons] = useState(allPokemons)
  useEffect(() => {
    if (filters.length > 0) {
      const filteredPokemons = allPokemons.filter(pokemon => {
        for (const type of pokemon.types) {
          if (filters.includes(type.type.name)) {
            return true
          }
        }
        return false
      })
      setPokemons(filteredPokemons)
    } else {
      setPokemons(allPokemons)
    }
  }, [filters, search])

  useEffect(() => {
    if (search !== '' && filters.length === 0) {
      const searchPokemon = allPokemons.filter(pokemon => pokemon.name.includes(search.toLowerCase()))
      setPokemons(searchPokemon)
    } else if (search !== '' && filters.length > 0) {
      const searchFilteredPokemon = pokemons.filter(pokemon => pokemon.name.includes(search.toLowerCase()))
      setPokemons(searchFilteredPokemon)
    }
  }, [search])

  return {
    pokemons
  }
}
