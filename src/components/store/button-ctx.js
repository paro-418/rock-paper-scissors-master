import React from "react";



const btnContext = React.createContext({
  modalClicked: false,
  modalClickedHandler: () => {},
});

export default btnContext;