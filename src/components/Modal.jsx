import { useEffect } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Modal = ({ open, activePokemon, close }) => {

  // Cerrar el modal cuando se presiona la tecla Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    // Eliminar el listener cuando el modal se cierra
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  // Para evitar renderizar el modal si no está abierto
  if (!open) {
    return null;
  }

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

        {/* Gráfica de barras */}
        <ResponsiveContainer width={'100%'} height={300} >
          <BarChart
            data={activePokemon.stats}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category"/>
            <Tooltip />
            <Bar dataKey="base" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
