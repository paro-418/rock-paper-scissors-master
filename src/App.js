import classes from "./App.module.css";
import UI from "./components/UI/UI";
import optContext from "./components/store/data-ctx";
import { useState, useContext } from "react";

function App() {
  const [choosed, setChoosed] = useState("");
  const [score, setScore] = useState(0);
  const optctx = useContext(optContext);
  const whatChoosedReceiver = (receivedChoosen) => {
    setChoosed(receivedChoosen);
  };
  const resetChoosed = () => {
    setChoosed("");
  };

  const scoreDecreaseHandler = () => {
    setScore((prevScore) => prevScore - 1);
  };
  const scoreIncreaseHandler = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <optContext.Provider
      value={{
        score,
        options: optctx.options,
        whatChoosedReceiver,
        choosed,
        resetChoosed,
        scoreDecreaseHandler,
        scoreIncreaseHandler,
      }}
    >
      <main className={classes.main}>
        <UI />
      </main>
    </optContext.Provider>
  );
}

export default App;
