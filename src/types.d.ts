export interface pokemon {
  id: number;
  name: string;
  isClicked: boolean;
  url: string;
}

export interface score {
  currentScore: number;
  highScore: number;
}

export type CardItemProps = {
  pokemon: pokemon;
  handleClick: (id: number) => void;
};

export type CardListProps = {
  pokemons: pokemon[];
  handleClick: (id: number) => void;
};

export type HeaderProps = {
  score: score;
};
