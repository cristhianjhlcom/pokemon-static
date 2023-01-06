export interface PokemonResponse {
    count: number;
    next: string;
    previous: null;
    results: Pokemon[];
}

interface PokemonSprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    other: {
        dream_world: {
            front_default: string;
        };
    };
}

export interface Pokemon {
    id: string;
    name: string;
    url: string;
    image: string;
    sprites: PokemonSprites;
}
