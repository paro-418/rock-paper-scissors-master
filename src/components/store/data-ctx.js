import React from "react";
import lizard from "../../images/icon-lizard.svg";
import paper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import spock from "../../images/icon-spock.svg";
import scissors from "../../images/icon-scissors.svg";

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

const optContext = React.createContext({
  score: 0,
  options,
  whatChoosed() {},
  choosed: "",
  resetChoosed() {},
  scoreIncreaseHandler() {},
  scoreDecreaseHandler() {},
});

export default optContext;
