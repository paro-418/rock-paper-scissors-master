import BodyPart from "../BodyPart/BodyPart";
import Header from "../Header/Header";
import classes from "./UI.module.css";

const UI = () => {
  return (
    <main className={classes.ui}>
      <Header />
      <BodyPart/>
    </main>
  );
};

export default UI;
