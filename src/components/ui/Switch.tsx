
import { Moon, Sun } from '../../assets/icons'
import { useTheme } from '../../hooks'

export const Switch = () => {
  const { theme, handleTheme } = useTheme()

  return (
    <>
      {
            theme === 'light'
              ? (
                <button
                  className='transition duration-300 hover:scale-[1.2] '
                  onClick={handleTheme}
                >

                  <Moon />
                </button>
                )
              : (
                <button
                  className='transition duration-300 rotate rotate-90 hover:scale-[1.2] hover:text-yellow'
                  onClick={handleTheme}
                >

                  <Sun />
                </button>
                )
        }

    </>

  )
}
