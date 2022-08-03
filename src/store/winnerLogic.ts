interface Picks {
  player: string;
  house: string;
}

const winnerLogic = ({ player, house }: Picks) => {
  switch (player) {
    case "rock":
      if (house === "paper") {
        return "lose";
      } else if (house === "scissors") {
        return "win";
      } else {
        return "tie";
      }
    case "scissors":
      if (house === "rock") {
        return "lose";
      } else if (house === "paper") {
        return "win";
      } else {
        return "tie";
      }
    case "paper":
      if (house === "rock") {
        return "win";
      } else if (house === "scissors") {
        return "lose";
      } else {
        return "tie";
      }
    default:
      return "undefined";
  }
};

export default winnerLogic;
