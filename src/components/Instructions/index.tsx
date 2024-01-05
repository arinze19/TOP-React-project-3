import styled from 'styled-components';

import { type StoreState } from '../../types';

interface InstructionsProps {
  onChange: (data: Partial<StoreState>) => void;
}

const Instructions = ({ onChange }: InstructionsProps) => {
  return (
    <InstructionsContainer>
      <button onClick={() => onChange({ modal: 'game_play' })}>
        Instructions
      </button>
    </InstructionsContainer>
  );
};

const InstructionsContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;

  button {
    border: 1px solid #ffd500;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: bold;
    padding: 4px 8px;
    background-color: #ffd50074;
  }
`;

export default Instructions;
