
import { AiOutlineClose } from 'react-icons/ai'
import { Filter, Search, Switch } from '.'

export const SidenavRight = () => {
  return (
    <nav
      id='sidenav-7'
      className="p-2 pt-10 fixed right-0 top-0 z-[1035] h-screen w-60 translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:-translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
      data-te-sidenav-hidden='false'
      data-te-sidenav-right='true'
    >
      <button
        className='p-2 absolute top-0 left-0 z-[1040] text-2xl text-slate-800 dark:text-slate-200'
        data-te-sidenav-toggle-ref
        data-te-target='#sidenav-7'
        aria-controls='#sidenav-7'
        aria-haspopup='true'
      >
        <AiOutlineClose />
      </button>
      <Search />
      <span className='flex gap-2'>Theme: <Switch /></span>
      <Filter />

    </nav>
  )
}
