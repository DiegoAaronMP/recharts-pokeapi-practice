import { useEffect, useState } from 'react';
const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const useGetPokemon = () => {
    const [pokemon, setPokemon] = useState();
    const [nextPage, setNextPage] = useState('');

    const getPokemon = async (url = DEFAULT_URL) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const { results } = data;

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

            setPokemon( pokeArray );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemon();
    }, []);

    return {
        pokemon
    };
}