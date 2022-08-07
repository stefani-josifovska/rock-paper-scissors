import { useContext, useEffect } from "react";
import { WinnerContext } from "../store/winner-context";
import Paper from "../icons/Paper";
import Scissors from "../icons/Scissors";
import Rock from "../icons/Rock";
import GameResult from "./GameResult";

const options = ["rock", "paper", "scissors"];

const GameField: React.FC = () => {
  const {
    setPlayerChoice,
    playerChoice,
    setHouseChoice,
    houseChoice,
    didPlayerWin,
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
      {playerChoice === "" && (
        <div>
          <Paper onClick={onSelectedItemHandler.bind(null, "paper")} />
          <Scissors onClick={onSelectedItemHandler.bind(null, "scissors")} />
          <Rock onClick={onSelectedItemHandler.bind(null, "rock")} />
        </div>
      )}
      {playerChoice !== "" && (
        <div>
          <h1>{displayChoice(playerChoice)}</h1>
          <p>you picked</p>
          {houseChoice !== "" && (
            <>
              {displayChoice(houseChoice)}
              <p>house picked</p>
            </>
          )}
        </div>
      )}
      {houseChoice !== "" && <GameResult />}
    </>
  );
};

export default GameField;
