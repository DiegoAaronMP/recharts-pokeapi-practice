import { useEffect } from "react";
import { Card } from "../components/Card"
import { useGetPokemon } from "../hooks/useGetPokemon";

export const HomePage = () => {
    const {pokemon} = useGetPokemon();
    console.log(pokemon);
    
    return (

        <div className="grid grid-cols-cards gap-4 m-6 md:mx-36">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    )
}
