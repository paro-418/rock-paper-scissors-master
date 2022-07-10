import IndividualImg from "../IndividualImg/IndividualImg";
import classes from "./Picked.module.css";
import optContext from "../store/data-ctx";
import { useContext } from "react";
import Button from "../Button/Button";
import { useState } from "react";

const Picked = () => {
  const [gameOver, setGameOver] = useState(true);
  const optctx = useContext(optContext);
  const pickedImage = optctx.options.find(
    (obj) =>
      obj.name.trim().toLowerCase() === optctx.choosed.trim().toLowerCase()
  );

  const chooseHandler = () => {
    optctx.resetChoosed();
  };
  return (
    <div className={classes.picked}>
      <div className={classes.subContainer}>
        <div className={classes.left}>
          <h1 className={classes.heading}>you picked</h1>
          <IndividualImg
            specificName={optctx.choosed}
            image={pickedImage.image}
            impClassName={classes.pickedImage}
            commonImg={classes.commonImg}
          />
        </div>
        {gameOver && (
          <div className={classes.middle}>
            <h1 className={classes.heading}>you win </h1>
            <Button className={classes.btn} callFunction={chooseHandler}>
              play again
            </Button>
          </div>
        )}
        <div className={classes.right}>
          <h1 className={classes.heading}>the house picked</h1>
          <IndividualImg
            specificName={optctx.choosed}
            image={pickedImage.image}
            impClassName={classes.pickedImage}
            commonImg={classes.commonImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Picked;
