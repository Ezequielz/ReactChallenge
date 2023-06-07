/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC, useEffect, useState } from 'react'
import { Pokemon } from '../../interfaces/pokemons'
import './card.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setSelected } from '../../store/pokemon'
import { getPokemonInfo } from '../../services/pokemonService'
import { CardLoader } from '.'

interface Props {
  pokemon: Pokemon
}
export const Card: FC<Props> = ({ pokemon }) => {
  const { selected } = useAppSelector(state => state.pokemons)
  const [infoPokemon, setInfoPokemon] = useState<Pokemon | null | string>(null)
  const dispatch = useAppDispatch()
  useEffect(() => {
    getPokemonInfo(pokemon.name).then(res => {
      if (res?.id) { setInfoPokemon({ ...res, name: pokemon.name }) } else { setInfoPokemon('not found') }
    })
  }, [])
  console.log(infoPokemon)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      const newSelected = selected.filter(res => {
        return res !== e.target.value
      })
      dispatch(setSelected(newSelected))
    } else {
      dispatch(setSelected([...selected, e.target.value]))
    }
  }
  if (typeof infoPokemon === 'string') {
    return (
      <h2 className='absolute'>
       Pokemon whit name:  <span className='font-bold'>' {pokemon.name} '</span> {infoPokemon}
      </h2>
    )
  }

  if (infoPokemon === null) {
    return (
      <CardLoader />
    )
  }
  return (
    <article
      className='animate-fade animate-once animate-duration-1000 group/card hoover:hidden block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-700'
    >
      <div className='relative'>
        <input
          className="absolute top-2 right-2 float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type='checkbox'
          checked={selected.includes(pokemon.name)}
          value={pokemon.name}
          id={pokemon.name}
          onChange={handleChange}
        />
      </div>
      <label htmlFor={`${pokemon.name}`} className='cursor-pointer'>
        <div className='px-2 lg:px-6 py-2'>
          <h5
            className='h-10 mb-2 text-sm xl:text-xl font-medium font-pokemon tracking-widest text-neutral-800 dark:text-neutral-50 text-center'
          >
            {infoPokemon?.name}
          </h5>

          <div>
            <img
              className='rounded-t-lg h-32 m-auto group-hover/card:scale-105 group-hover/card:transition-all group-hover/card:hidden'
              src={infoPokemon?.sprites.other['official-artwork'].front_default}
              alt={`imagen de ${infoPokemon?.name}`}
            />
            <img
              className='hidden rounded-t-lg h-32 m-auto group-hover/card:scale-105 group-hover/card:transition-all group-hover/card:block'
              src={infoPokemon?.sprites.other.dream_world.front_default
                ? infoPokemon?.sprites.other.dream_world.front_default
                : infoPokemon?.sprites.other['official-artwork'].front_default}
              alt={`imagen de ${infoPokemon?.name}`}
            />
          </div>

        </div>

        <div className='bg-slate-900 p-2 rounded-b-lg text-slate-100'>
          <div className='text-center'>
            <ul className='flex flex-row justify-center gap-1'>
              {infoPokemon?.types.map((type) => (
                <li key={type.type.name} className=''>
                  <div
                    className={`${type.type.name} flex items-center  rounded-[10px]   `}
                  >
                    <span className='text-xs md:text-md xl:text-lg font-bold tracking-wide px-[10px] py-0'>
                      {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <span className='flex justify-center text-xs md:text-md xl:text-lg font-bold'>Weight: {infoPokemon?.weight}</span>
          {/* <span>{infoPokemon?.id}</span> */}
        </div>
      </label>
    </article>
  )
}
