import { useCallback, useRef } from 'react';
import { Card } from '../components/Card'
import { Loader } from '../components/Loader';
import { useGetPokemon } from '../hooks/useGetPokemon';

export const HomePage = () => {
    const { pokemon, isLoading, getMorePokemon } = useGetPokemon();

    const observer = useRef();
    const lastPokemonCard = useCallback(card => {
        if (isLoading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                getMorePokemon();
            }
        });

        if (card) observer.current.observe(card);
    }, [isLoading, getMorePokemon]);

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

            {/* Spinner de carga */}
            { isLoading ? <Loader /> : '' }
        </>
    )
}
