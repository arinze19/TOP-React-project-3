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
