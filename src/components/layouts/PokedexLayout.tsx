import { FC } from 'react'
import { Navbar } from '../ui'

// import { Footer } from './'

interface Props {
  children: React.ReactNode
}

export const PokedexLayout: FC<Props> = ({ children }) => {
  return (
    <div className='font-Ysabeau min-h-screen '>
      <header>
        <Navbar />
      </header>
      <main className=''>
        {children}
      </main>

      {/* <footer className='absolute w-full'>
        <Footer />
      </footer> */}

    </div>
  )
}
