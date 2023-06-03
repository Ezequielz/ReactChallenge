/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { setOffset, setSelected, startGetPokemons } from '../store/pokemon'
import { Pokemon } from '../interfaces/pokemons'

export function usePokemons () {
  const dispatch = useAppDispatch()
  const { pokemons: allPokemons, filters, search, selected, offset } = useAppSelector(state => state.pokemons)

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    setPokemons(allPokemons)
  }, [allPokemons])
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

  const indexOfLastItem = offset * 20
  const currentPokemons = pokemons.slice(0, indexOfLastItem)

  let pokemonsInStorage: string[] = []
  if (localStorage.getItem('deletedPokemons')) {
    pokemonsInStorage = JSON.parse(localStorage.getItem('deletedPokemons')!)
  }
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    pokemonsInStorage.push(...selected)
    localStorage.setItem('deletedPokemons', JSON.stringify(pokemonsInStorage))
    dispatch(setSelected([]))
    dispatch(startGetPokemons())
  }
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    localStorage.removeItem('deletedPokemons')
    dispatch(setSelected([]))
    dispatch(startGetPokemons())
  }
  const nextPage = () => {
    dispatch(setOffset(offset + 1))
  }
  return {
    allPokemons: pokemons,
    pokemons: currentPokemons,
    pokemonsInStorage,
    handleDelete,
    handleReset,
    nextPage
  }
}
