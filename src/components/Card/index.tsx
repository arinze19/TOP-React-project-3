import { useMemo } from 'react';
import styled from 'styled-components';

import { randomizer } from '../../utils';

// Types
import { type Pokemon, type StoreState } from '../../types';

export interface CardItemProps {
  pokemon: Pokemon;
  handleClick: (id: number) => void;
}

export interface CardProps {
  level: number;
  score: number;
  pokemons: Pokemon[];
  onChange: (data: Partial<StoreState>) => void;
}

const Card = ({ level, score, pokemons, onChange }: CardProps) => {
  const Actions = useMemo(() => {
    return {
      handleChange: (id: number) => {
        const state = {
          pokemons: [...pokemons],
          score: score,
        };

        // find index of clicked pokemon
        const idx = pokemons.findIndex((pokemon) => pokemon.id === id);

        // dispatch game over modal
        if (state.pokemons[idx].isClicked)
          return onChange({ modal: 'game_over' });

        state.pokemons[idx] = Object.assign(pokemons[idx], { isClicked: true });

        // get high score from local storage
        const high_score = localStorage.getItem('high_score')
          ? JSON.parse(localStorage.getItem('high_score')!)
          : 0;

        state.score += 1;

        // if current score is higher than high score, increment high score
        if (state.score > high_score) {
          localStorage.setItem('high_score', JSON.stringify(state.score));
        }

        // check if all pokemons have been clicked
        if (state.pokemons.every((pokemon) => pokemon.isClicked === true))
          return onChange({ level: level + 1, score: score + 1 });

        onChange(state);
      },
    };
  }, [score]);

  /**
   * Shuffled Pokemons
   */
  const ShuffledPokemons = useMemo(() => {
    return randomizer(pokemons);
  }, [score]);

  return (
    <CardContainer>
      <h2>Level: {level}</h2>
      <CardList>
        {ShuffledPokemons.map((pokemon, idx) => (
          <CardItem
            pokemon={pokemon}
            key={idx}
            handleClick={() => Actions.handleChange(pokemon.id)}
          />
        ))}
      </CardList>
    </CardContainer>
  );
};

const CardItem = ({ pokemon, handleClick }: CardItemProps) => {
  return (
    <CardItemContainer onClick={() => handleClick(pokemon.id)}>
      <img src={pokemon.url} alt={pokemon.name} />
      <hr />
      <span>{pokemon.name}</span>
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
