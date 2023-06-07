/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '.'
import { setOffset, setSelected, startDeletePokemon, startRestorePokemons } from '../store/pokemon'
import { Pokemon } from '../interfaces/pokemons'

export function usePokemons () {
  const dispatch = useAppDispatch()
  const { pokemons: allPokemons, selected, offset } = useAppSelector(state => state.pokemons)

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    setPokemons(allPokemons)
  }, [allPokemons])

  let pokemonsInStorage: string[] = []
  if (localStorage.getItem('deletedPokemons')) {
    pokemonsInStorage = JSON.parse(localStorage.getItem('deletedPokemons')!)
  }
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    pokemonsInStorage.push(...selected)
    localStorage.setItem('deletedPokemons', JSON.stringify(pokemonsInStorage))
    dispatch(setSelected([]))
    dispatch(startDeletePokemon(selected))
  }
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setSelected([]))
    dispatch(startRestorePokemons())
  }
  const nextPage = () => {
    dispatch(setOffset(offset + 20))
  }
  return {
    allPokemons: pokemons,
    pokemons,
    pokemonsInStorage,
    handleDelete,
    handleReset,
    nextPage
  }
}
