import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
    pokemon: Pokemon;
}

export default function PokemonPage({ pokemon }: Props) {
    return (
        <Layout title="Pokemon Name">
            <h1>{pokemon.name}</h1>
        </Layout>
    );
}

export async function getStaticPaths() {
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map((id) => ({
            params: { id },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { id } = params as { id: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data,
        },
    };
}
