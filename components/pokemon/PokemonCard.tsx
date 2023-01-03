import {Card, Grid, Row, Text} from "@nextui-org/react"
import {useRouter} from "next/router"
import {Pokemon} from "../../interfaces"

interface Props {
    pokemon: Pokemon
}

export function PokemonCard({pokemon}: Props) {
    const {id, name, image} = pokemon
    const router = useRouter()

    function onClick() {
        router.push(`/pokemons/${id}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body css={{p: 1}}>
                    <Card.Image src={image} width="100%" height={140} alt={name} />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}

