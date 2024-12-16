import { useEffect, useState } from 'react';

const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const useGetPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [nextPage, setNextPage] = useState('');

    const getPokemon = async (url = DEFAULT_URL) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            /**
             * results almacena los datos de los Pokémon
             * next almacena la suguiente página a la que haríamos fetch con 
             * getMorePokemon()
             */
            const { results, next } = data;

            /**
             * pokeArray va a almacenar un arreglo de promesas, por eso
             * utilizamos Promise.all, que va a ejecutar todas esas promesas en paralelo
             * y va a esperar a que todas se resuelvan antes de continuar. 
             */
            const pokeArray = await Promise.all(
                results.map(async (poke) => {
                    const response = await fetch(poke.url);
                    const data = await response.json();

                    return {
                        id: data.id,
                        name: data.name,
                        sprite: data.sprites.other.dream_world.front_default
                    }
                })
            );

            return { pokeArray, next };
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Función para obtener la primera página de la PokéAPI
     */
    const getFirstPage = async () => {
        const { pokeArray, next } = await getPokemon(); 
        setPokemon(pokeArray);
        setNextPage(next);
    }

    /**
     * Función para obtener más Pokémon desde la siguiente página
     */
    const getMorePokemon = async () => {
        if (!nextPage) return; // Evitar fetching si no tenemos una siguiente página
        const { next, pokeArray } = await(getPokemon(nextPage));
        setPokemon( prev => [...prev, ...pokeArray]);
        setNextPage(next);
    }

    useEffect(() => {
        /** 
         * Se ejecuta desde el inicio, esto permite settear los
         * Pokémon y la Siguiente página
         */
        getFirstPage();
    }, []);

    return {
        getMorePokemon,
        pokemon,
    };
}