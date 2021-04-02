import { useState } from "react";
import "../../styles/layout/the-menu.css";

function TheMenu() {
  const [infoVisible, setInfoVisible] = useState(false);

  const hideInfoStyle = { display: "none" };
  const showInfoStyle = { display: "block" };
  const toggleInfo    = () => setInfoVisible((prevInfoVisible) => !prevInfoVisible);
  
  return (
    <>
      <div
        className="menu-info-container"
        style={!infoVisible ? showInfoStyle : hideInfoStyle}
      >
        <div className="menu-info-container__header">
          <h3>Objective</h3>
        </div>
        <div className="menu-info-container__body">
          <p>
            The goal is to click on individual pokemons and correctly recall
            those you have clicked. The pokemons are shuffled upon 
            each click. Clicking on a pokemon more than once means game 
            over for you champ. You advance to the next level once all 
            available pokemons have been clicked. Goodluck 🍀
          </p>
        </div>
      </div>
      <div className="menu-btn-container" onClick={() => toggleInfo()}>
        <i className="las la-info"></i>
      </div>
    </>
  );
}

export default TheMenu;
