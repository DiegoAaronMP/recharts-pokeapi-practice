

export const Card = () => {
  return (
    <div className='bg-white rounded-md justify-items-center'>
        <div >
            <img className='max-w-full' src='src/assets/25.png' alt="Pokémon artwork" />
        </div>
        
        <footer className='bg-red-500 w-full rounded-b-md'>
            <p className='text-base text-white font-semibold'>#025 Pikachu</p>
        </footer>
    </div>
  )
}
