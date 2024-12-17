import { Card } from '../components/Card'
import { Loader } from '../components/Loader';
import { useGetPokemon } from '../hooks/useGetPokemon';

export const HomePage = () => {
    const { pokemon, isLoading } = useGetPokemon();
    
    return (
        <>
            <div className='grid grid-cols-cards gap-4 m-6 md:mx-36'>
                {
                    pokemon?.map(poke =>
                        <Card key={poke.id} {...poke} />
                    )
                }
            </div>

            {/* Spinner de carga */}
            { isLoading ? <Loader /> : '' }
        </>
    )
}
