import { useState } from "react";

import AssemblyEndgame from "./AssemblyEndgame";
import "./App.css";

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const turnGameOn = () => setStartGame((c) => !c);

  return (
    <>
      {startGame && <AssemblyEndgame />}
      {!startGame && (
        <button className="game-starter" onClick={turnGameOn}>
          click me
        </button>
      )}
    </>
  );
};

export default App;
