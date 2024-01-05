export interface Pokemon {
  id: number;
  name: string;
  isClicked: boolean;
  url: string;
}

export interface StoreState {
  score: number;
  level: number;
  modal: string;
  pokemons: Pokemon[];
}

export interface PokemonAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
