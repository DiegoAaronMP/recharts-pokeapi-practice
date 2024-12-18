

export const Card = ({ id, name, sprite }) => {
  return (
    <div className='bg-white rounded-md ring-1 ring-gray-200 shadow-sm hover:scale-110 transition'>

      <div className="justify-items-center items-center justify-between px-2.5 py-1.5">

        <img className='w-full h-20 max-w-20 z-10' src={sprite} alt="Pokémon artwork" />

        <span className="px-1.5 m-1.5 top-0 left-0 rounded-lg text-xs font-extrabold text-gray-600 bg-gray-200">
          #{id}
        </span>
        
        <p className='text-lg font-extrabold text-wrap'>{name}</p>
      </div>

    </div>
  )
}
