import classes from "./Choose.module.css";
import pentagon from "../../images/bg-pentagon.svg";
import { useContext } from "react";
import optContext from "../store/data-ctx";


const Choose = () => {
  const optctx = useContext(optContext);

  return (
    <div className={classes.choose}>
      <img src={pentagon} className={classes.pentagon} />
      <span className={`${classes.lizardContainer} ${classes.imgContainer}`}>
        <img src={optctx.options[0].image} className={classes.lizard} />
      </span>
      <span className={`${classes.rockContainer} ${classes.imgContainer}`}>
        <img src={optctx.options[2].image} className={classes.rock} />
      </span>
      <span className={`${classes.spockContainer} ${classes.imgContainer}`}>
        <img src={optctx.options[4].image} className={classes.spock} />
      </span>
      <span className={`${classes.paperContainer} ${classes.imgContainer}`}>
        <img src={optctx.options[1].image} className={classes.paper} />
      </span>
      <span className={`${classes.scissorsContainer} ${classes.imgContainer}`}>
        <img src={optctx.options[3].image} className={classes.scissors} />
      </span>
    </div>
  );
};

export default Choose;
