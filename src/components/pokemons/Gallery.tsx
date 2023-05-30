import { PokedexLayout } from '../layouts'
import { List } from './List'

export const Gallery = () => {
  return (
    <PokedexLayout>
      <div className='px-44 py-5'>
        <h1 className='text-2xl font-bold text-center'>Gallery</h1>
        <List />
      </div>
    </PokedexLayout>
  )
}
