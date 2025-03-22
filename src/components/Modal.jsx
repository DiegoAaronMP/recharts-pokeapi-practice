
export const Modal = ({open, activePokemon, close}) => {
  return (
    <div onClick={close} className={`fixed inset-0 bg-black/30 flex justify-center items-center ${open ? '' : 'hidden'}`}>
        {/* El stopPropagation sirve para que el evento onClick del padre no llegue a los hijos,
            en este caso se está utilizando para evitar que se cierre el modal al dar clic dentro
            del contenido/hijo */}
        <div onClick={(e) => e.stopPropagation()} className="flex bg-white rounded-md w-full max-w-3xl max-h-full p-6 mx-4">
            <div>
              <h2 className="font-bold text-2xl uppercase">{activePokemon.name}</h2>
              <img className='w-24 h-auto mt-4 mb-2 z-10' src={activePokemon.sprite} alt={`${activePokemon.name} artwork`} />
            </div>
        </div>
    </div>
  )
}
