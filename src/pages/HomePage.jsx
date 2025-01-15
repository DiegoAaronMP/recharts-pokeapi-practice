import { useCallback, useRef, useState } from 'react';
import { Card } from '../components/Card'
import { Loader } from '../components/Loader';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { Modal } from '../components/Modal';

export const HomePage = () => {
    const { pokemon,
            isLoading,
            getMorePokemon,
            hasMorePokemon,
            error } = useGetPokemon();

    const [showModal, setShowModal] = useState({open: false, activePokemon: {}});

    const openModal = (pokemon) => {
        setShowModal({ open: true, activePokemon: pokemon});
    }
    
    const closeModal = () => {
        setShowModal({ open: false, activePokemon: {}});
    }

    const observer = useRef();

    // Función que gestiona el observador para el infinite scroll.
    const lastPokemonCard = useCallback(card => {
        if (isLoading) return; // Si ya estamos cargando datos, evitamos iniciar otra solicitud.

        // Desconectamos el observador anterior, si existe, para evitar duplicados.
        if (observer.current) observer.current.disconnect();

        // Creamos un nuevo observador utilizando IntersectionObserver API.
        observer.current = new IntersectionObserver(entries => {
            // Revisamos si el primer elemento observado está visible en el viewport.
            if (entries[0].isIntersecting && hasMorePokemon) {
                // Si está visible, solicitamos más datos de la API.
                getMorePokemon();
            }
        });

        // Si el elemento DOM asociado a la tarjeta existe,
        // lo conectamos al nuevo observador.
        if (card) observer.current.observe(card);
    }, [isLoading, getMorePokemon, hasMorePokemon]);

    return (
        <>
            <div className='grid grid-cols-cards gap-4 m-6 lg:w-[1000px] lg:mx-auto'>
                {
                    pokemon?.map((poke, index) =>
                        (pokemon.length === index + 1)
                            ? <Card ref={lastPokemonCard} key={poke.id} showModal={() => openModal(poke)} {...poke} />
                            : <Card key={poke.id} showModal={() => openModal(poke)} {...poke} />
                    )
                }
            </div>

            <Modal {...showModal} close={closeModal} />
            
            {/* Cuando se llega al final de la lista de Pokémon y ya no hay más para mostrar */}
            {   !hasMorePokemon &&
                <span className='flex justify-center my-6'>
                    Ya no hay más Pokémon para mostrar
                </span>
            }

            {/* Mostrar mensaje de error */}
            {   !isLoading && error &&
                <div className='justify-center my-6 mx-6 p-4 rounded-md ring-1 bg-red-100 ring-red-300'>
                    <h2 className='font-semibold text-xl'>Ha ocurrido un error</h2>
                    <p>Intente de nuevo recargando la página.</p>
                </div>
            }
            
            {/* Spinner de carga */}
            { isLoading && <Loader /> }
        </>
    )
}
