import { useContext } from "react";
import { WinnerContext } from "../store/winner-context";
import Logo from "./Logo";
import classes from "./Score.module.css";

const Score: React.FC = () => {
  const { currentScore } = useContext(WinnerContext);

  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes["score-display"]}>
        <p>score</p>
        <h2>{currentScore}</h2>
      </div>
    </div>
  );
};

export default Score;
