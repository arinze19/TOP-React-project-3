export interface Pokemon {
  id: number;
  name: string;
  isClicked: boolean;
  url: string;
}

export interface Score {
  currentScore: number;
  highScore: number;
}

export interface PokemonAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
