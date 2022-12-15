import React from 'react';
import '@styles/layout/the-menu.css';

function TheMenu() {
  const [infoVisible, setInfoVisible] = React.useState(true);

  const hideInfoStyle = { display: 'none' };
  const showInfoStyle = { display: 'block' };

  return (
    <>
      <div
        className='menu-info-container'
        style={infoVisible ? showInfoStyle : hideInfoStyle}
        data-testid='the-menu'
      >
        <div className='menu-info-container__header'>
          <h3>Objective</h3>
        </div>
        <div className='menu-info-container__body'>
          <p>
            This application puts your memory to the test. You are presented
            with multiple images of pokemons. The images get shuffled every-time
            they are clicked. You CAN NOT click on any image more than once or
            else your score resets to zero. The main objective is to get the
            highest score as possible.. Goodluck 🍀
          </p>
          <button
            className='menu-info-container__button'
            onClick={() => setInfoVisible(false)}
            data-testid='the-menu-button'
          >
            Okay
          </button>
        </div>
      </div>
    </>
  );
}

export default TheMenu;
