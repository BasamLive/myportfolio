import AssemblyEndgame from "./AssemblyEndgame";
import "./App.css";

const App = () => {
  const turnGameOn = () => setStartGame((c) => !c);

  return (
    <>
      <AssemblyEndgame />
    </>
  );
};

export default App;
