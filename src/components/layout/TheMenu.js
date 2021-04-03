import { useState } from "react";
import "../../styles/layout/the-menu.css";

function TheMenu() {
  const [infoVisible, setInfoVisible]   = useState(true);
  const [activeOption, setActiveOption] = useState("objective");

  const hideInfoStyle     = { display: "none" };
  const showInfoStyle     = { display: "block" };
  const objectiveActive   = activeOption === "objective" ? "active-option" : null;
  const leaderBoardActive = activeOption === "leader-board" ? "active-option" : null;
  const toggleInfo        = () => setInfoVisible((prevInfoVisible) => !prevInfoVisible);
  const toggleActiveOpt   = () =>setActiveOption((prevActiveOption) => {
      if (prevActiveOption === "objective") {
        return "leader-board";
      }

      return "objective";
    });

  return (
    <>
      <div
        className="menu-info-container"
        style={!infoVisible ? showInfoStyle : hideInfoStyle}
      >
        <div className="menu-info-container__header">
          <div
            className={`menu-info-container__header__option ${objectiveActive}`}
            onClick={() => toggleActiveOpt()}
          >
            Objective
          </div>
          <div
            className={`menu-info-container__header__option ${leaderBoardActive}`}
            onClick={() => toggleActiveOpt()}
          >
            Leader Board
          </div>
        </div>
        <div className="menu-info-container__body">
          <p>
            This application puts your memory to the test. You are presented
            with multiple images of pokemons. The images get shuffled every-time
            they are clicked. You CAN NOT click on any image more than once or
            else your score resets to zero. The main objective is to get the
            highest score as possible.. Goodluck 🍀
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
