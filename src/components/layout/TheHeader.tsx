import "../../styles/layout/the-header.css";
import { HeaderProps } from '../../types';

function header({ score }: HeaderProps) {
  return (
    <header className="header-container">
      <div className="header-container__logo">
        <img src="/logo.png" alt="poke-memo" />
        <h1>Poke Memo</h1>
      </div>

      <ul className="header-container__score-info">
        <li data-testid="current-score">Your Score: {score.currentScore}</li>
        <li data-testid="high-score">
          High Score<i className="las la-star"></i>: {score.highScore}
        </li>
      </ul>
    </header>
  );
}

export default header;
