import { useCallback, useRef } from 'react';
import { Card } from '../components/Card'
import { Loader } from '../components/Loader';
import { useGetPokemon } from '../hooks/useGetPokemon';

export const HomePage = () => {
    const { pokemon,
            isLoading,
            getMorePokemon,
            hasMorePokemon } = useGetPokemon();

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
                            ? <Card ref={lastPokemonCard} key={poke.id} {...poke} />
                            : <Card key={poke.id} {...poke} />
                    )
                }
            </div>
            
            {/* Cuando se llega al final de la lista de Pokémon y ya no hay más para mostrar */}
            {   !hasMorePokemon &&
                <span className='flex justify-center my-6'>
                    Ya no hay más Pokémon para mostrar
                </span>
            }

            {/* Spinner de carga */}
            { isLoading && <Loader /> }
        </>
    )
}
