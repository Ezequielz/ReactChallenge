
import { AiOutlineClose } from 'react-icons/ai'
import { Filter } from '.'

export const SidenavLeft = () => {
  return (
    <nav
      id='sideLeft'
      className=" p-2 absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
    //   data-te-sidenav-hidden='false'
    //   data-te-sidenavHidden='true'
    //   data-te-collapse-show='false'
    //   data-te-sidenav-collapsed='false'
    >
      <button
        className='p-2 absolute top-0 right-0 z-[1040] text-2xl text-slate-800 dark:text-slate-200'
        data-te-sidenav-toggle-ref
        data-te-target='#sideLeft'
        aria-controls='#sideLeft'
        aria-haspopup='true'
      >
        <AiOutlineClose />
      </button>
      {/* <Search /> */}
      <Filter />

    </nav>
  )
}
