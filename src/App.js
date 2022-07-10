import classes from "./App.module.css";
import UI from "./components/UI/UI";
import optContext from "./components/store/data-ctx";

import lizard from "./images/icon-lizard.svg";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import spock from "./images/icon-spock.svg";
import scissors from "./images/icon-scissors.svg";

const options = [
  {
    name: "lizard",
    image: lizard,
  },
  {
    name: "paper",
    image: paper,
  },
  {
    name: "rock",
    image: rock,
  },
  {
    name: "scissors",
    image: scissors,
  },
  {
    name: "spock",
    image: spock,
  },
];

function App() {
  return (
    <optContext.Provider
      value={{
        score: 0,
        options: options,
      }}
    >
      <main className={classes.main}>
        <UI />
      </main>
    </optContext.Provider>
  );
}

export default App;
