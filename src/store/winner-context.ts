import React from "react";

export type WinnerContextObject = {
  playerChoice: string;
  houseChoice: string;
  setPlayerChoice: (choice: string) => void;
  setHouseChoice: (choice: string) => void;
  didPlayerWin: (playerChoice: string, houseChoice: string) => void;
  currentScore: number;
  currentResult: string;
  resetGame: () => void;
};

export const WinnerContext = React.createContext<WinnerContextObject>({
  playerChoice: "",
  houseChoice: "",
  setPlayerChoice: (choice: string) => {},
  setHouseChoice: (choice: string) => {},
  didPlayerWin: (playerChoice: string, houseChoice: string) => {},
  currentScore: 0,
  currentResult: "",
  resetGame: () => {},
});
