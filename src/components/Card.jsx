

export const Card = ({id, name, sprite}) => {
  return (
    <div className='relative bg-white rounded-md ring-1 ring-gray-200 shadow-sm hover:scale-110 transition'>
      {/* Pokédex number */}
      <span className="absolute px-1.5 m-1.5 top-0 left-0 rounded-lg text-xs font-extrabold text-gray-600 bg-gray-200">
        #{id}
      </span>

      <div className="flex justify-items-center items-center justify-between px-2.5 py-1.5">
        <p className='text-lg font-extrabold text-wrap'>{name}</p>
        <img className='w-full max-w-20 z-10' src={sprite} alt="Pokémon artwork" />
      </div>
    </div>
  )
}
