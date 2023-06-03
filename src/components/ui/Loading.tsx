import pokebola from '../../assets/pokebola.png'
export const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-24'>
      <div className='h-[100%] animate-spin-slow '>
        <img
          className='h-[50%] w-[50%]  m-auto '
          src={pokebola} alt=''
        />
      </div>

      <span className='text-2xl'>Loading Pokemons</span>

    </div>
  )
}
