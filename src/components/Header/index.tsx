import { useMemo } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  score: number;
}

function Header({ score }: HeaderProps) {
  const high_score = useMemo(() => {
    const stored = localStorage.getItem('high_score');
    return stored ? JSON.parse(stored) : 0;
  }, [score]);

  return (
    <HeaderContainer>
      <Logo>
        <img
          src='https://res.cloudinary.com/dmrib2gtg/image/upload/v1697921863/logo_ktdpcf.png'
          alt='poke-memo'
        />
        <h1>Poke Memo</h1>
      </Logo>

      <ul>
        <li>
          <span>Your Score: {score}</span>
        </li>
        <li>
          <span>
            High Score<i className='las la-star'></i>: {high_score}
          </span>
        </li>
      </ul>
    </HeaderContainer>
  );
}

// Styles
const HeaderContainer = styled.header`
  background-color: #10162f;
  padding: 0.5rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .la-star {
    color: #ffd500;
  }

  ul {
    margin-right: 2rem;
    padding: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0;
      padding: 0 1rem;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    h1 {
      display: none;
    }
  }
`;

export default Header;
