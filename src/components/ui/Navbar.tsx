import { Switch } from './Switch'

export const Navbar = () => {
  return (
    <nav className='mx-auto flex  justify-between items-center px-12 py-5 bg-red-500 dark:bg-red-700 text-slate-100' aria-label='Global'>

      {/* Logo */}
      <div className='flex items-center lg:flex-1 relative mt-[-10px]'>
        <span
          className='text-4xl font-bold xl -rotate-3 '
        >Pokedex
        </span>
      </div>
      <Switch />

    </nav>
  )
}
