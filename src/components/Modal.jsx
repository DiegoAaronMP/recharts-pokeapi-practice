import { useEffect, useState } from "react";
import { ResponsiveContainer } from "recharts";
import { PokeBarChart } from "./charts/PokeBarChart";
import { PokeRadarChart } from "./charts/PokeRadarChart";

export const Modal = ({ open, activePokemon, close }) => {

  const [selectedChart, setSelectedChart] = useState('bar');

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
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-md w-full max-w-3xl max-h-full p-6 mx-4">

        {/* Nombre del Pokémon */}
        <h2 className="font-bold text-2xl uppercase">
          <span className="opacity-70 mr-1.5">#{activePokemon.id} -</span>
          {activePokemon.name}
        </h2>

        {/* Contenedor para la imagen y las gráficas */}
        <div className="flex">
          <img className='w-24 h-auto mx-4 z-10' src={activePokemon.sprite} alt={`${activePokemon.name} artwork`} />

          {/* Gráfica de barras */}
          <ResponsiveContainer width={'100%'} height={300} >
            {/* Por alguna razón no es posible renderizar la gráfica como en la siguiente línea */}
            {/* <PokeBarChart stats={activePokemon.stats} /> */}

            {/* Para que se renderice, se debe de usar el componente como si fuese una función */}
            {/* Gráfica de barras */}
            {
              selectedChart === 'bar' && PokeBarChart(activePokemon.stats)
            }

            {/* Gráfica de Radar */}
            {
              selectedChart === 'radar' && PokeRadarChart(activePokemon.stats)
            }
          </ResponsiveContainer>
        </div>

        {/* Contenedor para los botones */}
        <div className="flex gap-2">
          <button 
            className="bg-blue-700 py-2 px-4 text-white rounded-md shadow-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
            onClick={() => setSelectedChart('bar')}
          >
            Bar Chart
          </button>
          <button 
            className="bg-blue-700 py-2 px-4 text-white rounded-md shadow-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
            onClick={() => setSelectedChart('radar')}
          >
            Radar Chart
          </button>
        </div>
      </div>
    </div>
  )
}
