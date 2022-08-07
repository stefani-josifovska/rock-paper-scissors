import { useState, useCallback } from "react";
import { WinnerContext } from "./winner-context";
import winnerLogic from "./winnerLogic";
import { WinnerContextObject } from "./winner-context";

const WinnerContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");
  const [gameResult, setGameResult] = useState(""); // did player win, lose, or it's a tie
  const [score, setScore] = useState(0);
  const [areRulesDisplayed, setAreRulesDisplayed] = useState<boolean>(false);

  const setPlayerChoiceHandler = (choice: string) => setPlayerChoice(choice);
  const setHouseChoiceHandler = (choice: string) => setHouseChoice(choice);

  const didPlayerWin = useCallback((player: string, house: string) => {
    const result = winnerLogic({ player, house });
    setGameResult(winnerLogic({ player, house }));
    if (result === "win") {
      setScore((prev) => prev + 1);
    } else if (result === "lose") {
      setScore((prev) => prev - 1);
    }
  }, []);

  const resetGameHandler = () => {
    setPlayerChoice("");
    setHouseChoice("");
    setGameResult("");
  };

  const onRulesClickHandler = () => {
    setAreRulesDisplayed((prev) => !prev);
  };

  const contextValue: WinnerContextObject = {
    playerChoice: playerChoice,
    houseChoice: houseChoice,
    setPlayerChoice: setPlayerChoiceHandler,
    setHouseChoice: setHouseChoiceHandler,
    didPlayerWin: didPlayerWin,
    currentScore: score,
    currentResult: gameResult,
    resetGame: resetGameHandler,
    areRulesDisplayed: areRulesDisplayed,
    displayRules: onRulesClickHandler,
  };

  return (
    <WinnerContext.Provider value={contextValue}>
      {children}
    </WinnerContext.Provider>
  );
};

export default WinnerContextProvider;
