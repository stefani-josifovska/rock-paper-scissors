import { useContext, useEffect } from "react";
import { WinnerContext } from "../store/winner-context";
import Paper from "../icons/Paper";
import Scissors from "../icons/Scissors";
import Rock from "../icons/Rock";
import GameResult from "./GameResult";
import classes from "./GameField.module.css";
import Rules from "./Rules";
// import { triangleBg } from "./triangleBg";

const options = ["rock", "paper", "scissors"];

const GameField: React.FC = () => {
  const {
    setPlayerChoice,
    playerChoice,
    setHouseChoice,
    houseChoice,
    didPlayerWin,
    areRulesDisplayed,
    displayRules
  } = useContext(WinnerContext);

  const onSelectedItemHandler = (clickedItem: string) => {
    setPlayerChoice(clickedItem);
    setTimeout(() => {
      setHouseChoice(options[Math.floor(Math.random() * options.length)]);
    }, 500);
  };

  useEffect(() => {
    houseChoice !== "" &&
      setTimeout(() => {
        didPlayerWin(playerChoice, houseChoice);
      }, 500);
  }, [didPlayerWin, houseChoice, playerChoice]);

  const displayChoice = (choice: string) => {
    switch (choice) {
      case "rock":
        return <Rock />;
      case "paper":
        return <Paper />;
      case "scissors":
        return <Scissors />;
      default:
        return <h2>An error occured.</h2>;
    }
  };

  return (
    <>
      {!areRulesDisplayed && (
        <div className={classes["gamefield-container"]}>
          {/* <div className={classes.background}>{triangleBg}</div> */}
          {playerChoice === "" && (
            <div className={classes['choices-container']}>
              <Paper onClick={onSelectedItemHandler.bind(null, "paper")} />
              <Scissors
                onClick={onSelectedItemHandler.bind(null, "scissors")}
              />
              <Rock onClick={onSelectedItemHandler.bind(null, "rock")} style={{left: "45%"}} />
            </div>
          )}
          {playerChoice !== "" && (
            <div className={classes["picked-container"]}>
              <div className={classes["picked-player"]}>
                {displayChoice(playerChoice)}
                <p style={{ color: "white" }}>you picked</p>
              </div>
              <div className={classes["picked-house"]}>
                {houseChoice === "" && (
                  <div
                    style={{
                      height: "20vw",
                      width: "20vw",
                      clear: "both",
                      borderRadius: "50%",
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }}
                    className={classes.cirle}
                  ></div>
                )}
                {houseChoice !== "" && <>{displayChoice(houseChoice)}</>}
                <p style={{ color: "white" }}>the house picked</p>
              </div>
            </div>
          )}
          {houseChoice !== "" && <GameResult />}
          <button
            type="button"
            onClick={displayRules}
            className={classes["rules-btn"]}
          >
            rules
          </button>
        </div>
      )}
      {areRulesDisplayed && <Rules />}
    </>
  );
};

export default GameField;
