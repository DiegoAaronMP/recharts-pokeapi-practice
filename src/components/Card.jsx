

export const Card = () => {
  return (
    <div className='bg-white rounded-md justify-items-center'>
      {/* Pokédex number */}
      <span className="absolute px-1.5 m-1 rounded-lg text-xs font-extrabold text-gray-700 bg-gray-300">
        #025
      </span>

      <img className='w-[70%]' src='src/assets/25.png' alt="Pokémon artwork" />

      <footer className='bg-red-500 w-full rounded-b-md'>
        <p className='text-base text-white font-semibold'>#025 Pikachu</p>
      </footer>
    </div>
  )
}
