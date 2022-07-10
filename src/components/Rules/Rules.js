import classes from "./Rules.module.css";
import ReactDOM from "react-dom";
import rules from "../../images/image-rules-bonus.svg";
import Button from "../Button/Button";
import close from "../../images/icon-close.svg"

const RulesModal = () => {
  return (
    <main className={classes.rules}>
      <div className={classes.rulesContainer}>
        <div className={classes.top}>
            <h1 className={classes.heading}>rules</h1>
            <Button className={classes.btn}><img src={close}/></Button>
        </div>
        <img className={classes.img} src={rules} />
      </div>
    </main>
  );
};

const Rules = () => {
  return ReactDOM.createPortal(
    <RulesModal />,
    document.getElementById("modal-root")
  );
};

export default Rules;
