import { useContext } from "react";
import { WinnerContext } from "../store/winner-context";
import classes from './GameField.module.css';

const GameResult: React.FC = () => {
  const { currentResult, resetGame } = useContext(WinnerContext);

  const onRestartGameHandler = () => {
    resetGame();
  };

  return (
    <div className={classes['result-container']}>
      {currentResult !== "" && (
        <>
          <h2 style={{color: "white"}}>{`You ${currentResult}`}</h2>
          <button onClick={onRestartGameHandler} className={classes.btn} >Play again</button>
        </>
      )}
    </div>
  );
};

export default GameResult;
