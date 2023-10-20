import { useMemo } from 'react';

// Styles
import './styles.css';

export interface HeaderProps {
  score: number;
}

function Header({ score }: HeaderProps) {
  const highScore = useMemo(() => {
    const score = localStorage.getItem('high_score');
    return score ? parseInt(score) : 0;
  }, [score]);

  return (
    <header className='header-container'>
      <div className='header-container__logo'>
        <img src='/logo.png' alt='poke-memo' />
        <h1>Poke Memo</h1>
      </div>

      <ul className='header-container__score-info'>
        <li data-testid='current-score'>Your Score: {score}</li>
        <li data-testid='high-score'>
          High Score<i className='las la-star'></i>: {highScore}
        </li>
      </ul>
    </header>
  );
}

export default Header;
