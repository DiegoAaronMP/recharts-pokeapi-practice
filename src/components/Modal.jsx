
export const Modal = ({open, activePokemon, close}) => {
  return (
    <div onClick={close} className={`fixed inset-0 bg-black/30 flex justify-center items-center ${open ? '' : 'invisible'}`}>
        {/* El stopPropagation sirve para que el evento onClick del padre no llegue a los hijos,
            en este caso se está utilizando para evitar que se cierre el modal al dar clic dentro
            del contenido/hijo */}
        <div onClick={(e) => e.stopPropagation()} className="flex bg-white rounded-md w-full max-w-3xl max-h-full p-4 mx-4">
            <div>
              <img className='w-16 h-auto mt-2 mb-1 z-10' src={activePokemon.sprite} alt={`${activePokemon.name} artwork`} />
              <h2 className="font-bold text-xl uppercase">{activePokemon.name}</h2>
            </div>
        </div>
    </div>
  )
}
