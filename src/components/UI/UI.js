import BodyPart from "../BodyPart/BodyPart";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Rules from "../Rules/Rules";
import classes from "./UI.module.css";

const UI = () => {
  return (
    <main className={classes.ui}>
      <Header />
      <BodyPart/>
      <div className={classes.btnDiv}>
        <Button className={classes.btn}>Rules</Button>
      </div>
      <Rules/>
    </main>
  );
};

export default UI;
