import React, { useContext } from "react";
import ReactDOM from "react-dom";
import rulesImg from "../images/image-rules.svg";
import classes from "./Rules.module.css";
import { WinnerContext } from "../store/winner-context";

const RulesContent: React.FC = () => {
    const { displayRules } = useContext(WinnerContext);

  return (
    <div className={classes.container}>
      <h2>RULES</h2>
      <img src={rulesImg} alt="" />
      <button onClick={displayRules}>X</button>
    </div>
  );
};

const Rules = () => {
  return (
    ReactDOM.createPortal(<RulesContent/>, document.getElementById('rules-modal') as HTMLElement)
  );
};

export default Rules;
