

export const Card = () => {
  return (
    <div className='flex relative bg-white rounded-md justify-items-center items-center'>
      {/* Pokédex number */}
      <span className="absolute px-1.5 m-1 top-0 left-0 rounded-lg text-xs font-extrabold text-gray-700 bg-gray-300">
        #025
      </span>

      <p className='text-base font-semibold'>Pikachu</p>

      <img className='w-full max-w-32 ml-3' src='src/assets/25.png' alt="Pokémon artwork" />
    </div>
  )
}
