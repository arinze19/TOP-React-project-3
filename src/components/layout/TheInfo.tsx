import React, { useState } from 'react';
import '../../styles/layout/the-info.css';

export default function TheInfo() {
  const [active, setActive] = useState(true);

  const infoStyle = active ? { display: 'block' } : { display: 'none' }

  return (
    <div className='the-info-container' style={infoStyle}>
      <h2>How to play 🤾🏽‍♀️</h2>
      <p>
        This application puts your memory to the test. You are presented with
        multiple images of pokemons. The images get shuffled every-time they are
        clicked. You CAN NOT click on any image more than once or else your
        score resets to zero. The main objective is to get the highest score as
        possible.. Goodluck 🍀
      </p>
      <button onClick={() => setActive(!active)}>
          Okay
      </button>
    </div>
  );
}
