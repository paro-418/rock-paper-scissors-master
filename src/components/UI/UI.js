import BodyPart from "../BodyPart/BodyPart";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Rules from "../Rules/Rules";
import classes from "./UI.module.css";
import { useState } from "react";

const UI = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <main className={classes.ui}>
      <Header />
      <BodyPart />
      <div className={classes.btnDiv}>
        <Button callFunction={modalHandler} className={classes.btn}>
          Rules
        </Button>
      </div>
      {modal && <Rules callFunction={modalHandler} />}
    </main>
  );
};

export default UI;
