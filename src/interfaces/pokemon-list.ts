export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    imag:string;//agregamos estas propiedades
    id:number;  //agregamos estas propiedades
}
