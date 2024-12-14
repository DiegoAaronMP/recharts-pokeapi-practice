import { useEffect, useState } from 'react';

export const useGetPokemon = () => {
    const [pokemon, setPokemon] = useState();

    const getPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data = await response.json();
            const { results } = data;

            const pokeArray = results.map(async (poke) => {
                const response = await fetch(poke.url);
                const data = await response.json();

                return {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_default
                }
            });

            setPokemon( await Promise.all(pokeArray) );
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