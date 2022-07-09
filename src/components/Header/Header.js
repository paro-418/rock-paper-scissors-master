import classes from "./Header.module.css";
import bonus from "../../images/logo-bonus.svg"

const Header = () => {
  return <div className={classes.header}>
    <img src={bonus}/>
    <span className={classes.scoreBoard}>
        <p className={classes.scoreHeading}>score</p>
        <span className={classes.score}>11</span>
    </span>
  </div>;
};

export default Header;
