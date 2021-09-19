export interface pokemon {
    id: number,
    name: string,
    imgUrl: string,
    isClicked: boolean
}

export interface score {
    currentScore: number,
    highScore: number
}

export type CardItemProps = {
    pokemon: pokemon;
    handleClick: (id: number) => void;
}

export type CardListProps = {
    pokemons: pokemon[],
    level: number,
    handleClick: (id: number) => void
}

export type HeaderProps = {
    score: score
}