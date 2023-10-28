import styled from 'styled-components';

// Types
import { Pokemon } from '../../types';

export interface CardProps {
  pokemons: Pokemon[];
  level: number;
  handleClick: (id: number) => void;
}

export interface CardItemProps {
  pokemon: Pokemon;
  handleClick: (id: number) => void;
}

const Card = ({ pokemons, level, handleClick }: CardProps) => {
  return (
    <CardContainer>
      <h2>Level: {level}</h2>
      <CardList>
        {pokemons.map((pokemon, idx) => (
          <CardItem pokemon={pokemon} key={idx} handleClick={handleClick} />
        ))}
      </CardList>
    </CardContainer>
  );
};

const CardItem = ({ pokemon, handleClick }: CardItemProps) => {
  return (
    <CardItemContainer
      onClick={() => handleClick(pokemon.id)}
      data-testid='card-item'
    >
      <img src={pokemon.url} alt={pokemon.name} />
      <hr />
      <span data-testid='card-item-name'>{pokemon.name}</span>
    </CardItemContainer>
  );
};

// Styles
const CardContainer = styled.div`
  h2 {
    text-align: center;
  }
`;

const CardItemContainer = styled.div`
  padding: 16px;
  text-align: center;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  gap: 4px;
  background-color: #ffd50074;
  cursor: pointer;
  margin: 1em;
  transition: all 0.3s ease-in-out;

  img {
    width: 120px;
    height: 120px;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #10162f;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

const CardList = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  max-width: 1220px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Card;