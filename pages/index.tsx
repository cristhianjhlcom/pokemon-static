import {Grid} from '@nextui-org/react';
import {ReactElement} from 'react';

import {pokeApi} from '../api';
import {Layout} from '../components/layouts';
import {PokemonCard} from '../components/pokemon';
import {Pokemon, PokemonResponse} from '../interfaces';

interface Props {
    pokemons: Array<Pokemon>;
}

export default function Home({pokemons}: Props): ReactElement {
    console.log({pokemons});
    return (
        <Layout title='Pokemon App'>
            <Grid.Container gap={2} justify='flex-start'>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </Grid.Container>
        </Layout>
    );
}

export async function getStaticProps(): Promise<{
    props: {pokemons: Pokemon[]};
}> {
    const {data} = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');
    //
    const pokemons: Pokemon[] = data.results.map((pokemon, index) => {
        const id = String(index + 1);

        return {
            ...pokemon,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
    });

    return {
        props: {
            pokemons,
        },
    };
}
