
export const Modal = ({open, activePokemon, close}) => {
  return (
    <div onClick={close} className={`fixed inset-0 bg-black/30 flex justify-center items-center ${open ? '' : 'invisible'}`}>
        {/* El stopPropagation sirve para que el evento onClick del padre no llegue a los hijos,
            en este caso se está utilizando para evitar que se cierre el modal al dar clic dentro
            del contenido/hijo */}
        <div onClick={(e) => e.stopPropagation()} className="flex bg-white">
            <img className='w-full h-20 max-w-20 mt-2 mb-1 z-10' src={activePokemon.sprite} alt='Pokémon artwork' />
            <h2 className="font-bold uppercase">{activePokemon.name}</h2>
        </div>
    </div>
  )
}
