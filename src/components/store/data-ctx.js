import React from "react";

const optContext = React.createContext({
  score: 0,
  options: [],
  whatChoosed() {},
  choosed: "",
  resetChoosed() {},
});

export default optContext;
