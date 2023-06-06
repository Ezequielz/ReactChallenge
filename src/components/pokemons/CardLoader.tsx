
export const CardLoader = () => {
  return (
    <article
      className='animate-fade animate-once animate-duration-1000 group/card hoover:hidden block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-700'
    >

      <div className='px-2 lg:px-6 py-2'>
        <p className='mb-4 animate-pulse flex flex-row gap-2 justify-center'>
          <span
            className='inline-block min-h-[1.6em] w-full  cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50'
          />
        </p>

        <div>
          <p
            className='placeholder mb-4 animate-[placeholder-wave_2s_linear_infinite] [mask-size:200%_100%]'
          >
            <span
              className='inline-block h-32 w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50'
            />
          </p>

        </div>

      </div>

      <div className='bg-slate-900 p-2 rounded-b-lg text-slate-100'>
        <div className='text-center'>
          <p className='mb-4 animate-pulse flex flex-row gap-2 justify-center'>
            <span
              className='inline-block min-h-[0.7em] w-20  cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50'
            />
            <span
              className='inline-block min-h-[0.5] w-20  cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50'
            />
          </p>
        </div>
        <p className='mb-4 animate-pulse flex flex-row gap-2 justify-center'>
          <span
            className='inline-block min-h-[1.2em] w-20  cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50'
          />
        </p>
      </div>

    </article>
  )
}
