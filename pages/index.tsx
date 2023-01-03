import {Card, Grid, Row, Text} from "@nextui-org/react"
import {ReactElement} from "react"
import {pokeApi} from "../api"
import {Layout} from "../components/layouts"
import {Pokemon, PokemonResponse} from "../interfaces"

interface Props {
    pokemons: Array<Pokemon>
}

export default function Home({pokemons}: Props): ReactElement {
    console.log({pokemons})
    return (
        <Layout title="Pokemon App">
            <Grid.Container gap={2} justify="flex-start">
                {pokemons.map((pokemon) => (
                    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
                        <Card isHoverable isPressable>
                            <Card.Body css={{p: 1}}>
                                <Card.Image
                                    src={pokemon.image}
                                    width="100%"
                                    height={140}
                                    alt={pokemon.name}
                                />
                            </Card.Body>
                            <Card.Footer>
                                <Row justify="space-between">
                                    <Text transform="capitalize">{pokemon.name}</Text>
                                    <Text>#{pokemon.id}</Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </Layout>
    )
}

export async function getStaticProps(): Promise<{props: {pokemons: Pokemon[]}}> {
    const {data} = await pokeApi.get<PokemonResponse>("/pokemon?limit=151")
    //
    const pokemons: Pokemon[] = data.results.map((pokemon, index) => {
        const id = String(index + 1)

        return {
            ...pokemon,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }
    })

    return {
        props: {
            pokemons,
        },
    }
}

