export interface PokemonResponse {
    count: number
    next: string
    previous: null
    results: Pokemon[]
}

export interface Pokemon {
    id: string
    name: string
    url: string
    image: string
}

