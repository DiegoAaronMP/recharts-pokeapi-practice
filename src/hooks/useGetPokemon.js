import { useEffect, useState } from 'react';

export const useGetPokemon = () => {
    const [pokemon, setPokemon] = useState();

    const getPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            const data = await response.json();
            setPokemon(data);
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