import { Card } from "../components/Card"
import { useGetPokemon } from "../hooks/useGetPokemon";

export const HomePage = () => {
    const { pokemon } = useGetPokemon();
    
    return (

        <div className="grid grid-cols-cards gap-4 m-6 md:mx-36">
            {
                pokemon?.map(poke =>
                    <Card key={poke.id} {...poke} />
                )
            }
        </div>

    )
}
