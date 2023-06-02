import { Switch } from './Switch'
import logo from '../../assets/Pokédex_logo.png'
import { SidenavRight } from '.'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  Sidenav,
  initTE
} from 'tw-elements'

export const Navbar = () => {
  initTE({ Sidenav })
  return (
    <nav className='mx-auto flex  justify-between items-center px-3 py-1 lg:px-32 lg:py-2 bg-red-500 dark:bg-red-700 text-slate-100' aria-label='Global'>

      {/* Logo */}
      <div className='flex items-center lg:flex-1'>
        <img
          src={logo}
          alt='logo pokedex'
          className='h-12'
        />
      </div>
      <SidenavRight />
      <button
        // className='mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
        data-te-sidenav-toggle-ref
        data-te-target='#sidenav-7'
        aria-controls='#sidenav-7'
        aria-haspopup='true'
      >
        <GiHamburgerMenu />
      </button>
      <div className='hidden lg:block'>
        <Switch />
      </div>

    </nav>
  )
}
