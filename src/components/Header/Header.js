import classes from "./Header.module.css";
import bonus from "../../images/logo-bonus.svg";
import optContext from "../store/data-ctx";
import { useContext } from "react";

const Header = () => {
  const optctx = useContext(optContext);
  return (
    <div className={classes.header}>
      <img src={bonus} className={classes.bonus} />
      <span className={classes.scoreBoard}>
        <p className={classes.scoreHeading}>score</p>
        <span className={classes.score}>{optctx.score}</span>
      </span>
    </div>
  );
};

export default Header;
