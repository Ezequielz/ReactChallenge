/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react'
import { Pokemon } from '../interfaces/pokemons'
import { getPokemonInfo } from '../services/pokemonService'

export const usePokemonInfo = (pokemon: Pokemon) => {
  const [infoPokemon, setInfoPokemon] = useState<Pokemon | null | string>(null)
  useEffect(() => {
    getPokemonInfo(pokemon.name).then(res => {
      if (res?.id) { setInfoPokemon({ ...res, name: pokemon.name }) } else { setInfoPokemon('not found') }
    })
  }, [])

  return {
    infoPokemon
  }
}
