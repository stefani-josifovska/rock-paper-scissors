import { useContext } from "react";
import { WinnerContext } from "../store/winner-context";

const GameResult: React.FC = () => {
  const { currentResult, resetGame } = useContext(WinnerContext);

  const onRestartGameHandler = () => {
    resetGame();
  };

  return (
    <div>
      {/* {currentResult === ("win" || "lose") && <h2>{`You ${currentResult}`}</h2>} */}
      {currentResult !== "" && (
        <>
          <h2>{`You ${currentResult}`}</h2>
          <button onClick={onRestartGameHandler} >Play again</button>
        </>
      )}
    </div>
  );
};

export default GameResult;
