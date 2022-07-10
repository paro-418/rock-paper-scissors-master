import classes from "./App.module.css";
import UI from "./components/UI/UI";
import optContext from "./components/store/data-ctx";
import { useState, useContext } from "react";

function App() {
  const [choosed, setChoosed] = useState("");
  const optctx = useContext(optContext);
  const whatChoosedReceiver = (receivedChoosen) => {
    setChoosed(receivedChoosen);
  };

  const resetChoosed = () => {
    setChoosed("");
  };

  return (
    <optContext.Provider
      value={{
        score: 0,
        options: optctx.options,
        whatChoosedReceiver,
        choosed,
        resetChoosed,
      }}
    >
      <main className={classes.main}>
        <UI />
      </main>
    </optContext.Provider>
  );
}

export default App;
