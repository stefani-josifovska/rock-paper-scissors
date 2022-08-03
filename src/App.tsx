import "./App.css";
import Score from "./components/Score";
import GameField from "./components/GameField";
import WinnerContextProvider from "./store/WinnerContextProvider";

function App() {
  return (
    <WinnerContextProvider>
      <div className="app-container">
        <Score />
        <GameField />
      </div>
    </WinnerContextProvider>
  );
}

export default App;
