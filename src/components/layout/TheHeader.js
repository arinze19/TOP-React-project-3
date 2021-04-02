import "../../styles/layout/the-header.css";

function header({ score }) {
  return (
    <header className="header-container">
      <div className="header-container__logo">
        <img src="/logo.png" alt="poke-memo" />
        <h1>Poke Memo</h1>
      </div>

      <ul className="header-container__score-info">
        <li>Your Score: {score.currentScore}</li>
        <li>
          High Score<i className="las la-star"></i>: {score.highScore}
        </li>
      </ul>
    </header>
  );
}

export default header;
