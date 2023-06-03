import { Switch } from './Switch'
import logo from '../../assets/Pokédex_logo.png'

export const Navbar = () => {
  return (
    <nav className='mx-auto flex  justify-between items-center px-3 py-1 xs:px-5 sm:px-10 md:px-20 lg:px-32 lg:py-2 bg-red-500 dark:bg-red-700 text-slate-100' aria-label='Global'>

      {/* Logo */}
      <div className='flex items-center lg:flex-1'>
        <img
          src={logo}
          alt='logo pokedex'
          className='h-12'
        />
      </div>
      <Switch />

    </nav>
  )
}
