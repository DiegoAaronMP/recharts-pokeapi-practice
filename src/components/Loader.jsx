
export const Loader = () => {
  return (
    <div className='text-center mb-4'>
      <div className='spinner mx-auto'></div>
      <p className='font-bold mt-1.5'>Loading</p>
    </div>
  )
}

/**
 * Pongo la siguiente como referencia.
 * Para crear un Spinner igual sin una clase de CSS
 * se puede utilizar la siguiente lista de clases de Tailwind:
 * w-10 h-10 border-4 border-gray-300 border-t-neutral-800 rounded-full animate-spin mx-auto
 */