import IndividualImg from "../IndividualImg/IndividualImg";
import classes from "./Picked.module.css";
import optContext from "../store/data-ctx";
import { useContext } from "react";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

let win;
const Picked = () => {
  // const [win, setWin] = useState(false);
  const [machineChoosed, setMachineChoose] = useState({});
  const optctx = useContext(optContext);
  const pickedImage = optctx.options.find(
    (obj) =>
      obj.name.trim().toLowerCase() === optctx.choosed.trim().toLowerCase()
  );

  useEffect(() => {
    const chooseTimeout = setTimeout(() => {
      const randomImg = optctx.options[Math.floor(Math.random() * 5)];
      setMachineChoose(randomImg);

      // game logic to be put here
      if (pickedImage.name.trim().toLowerCase() === "scissors") {
        switch (randomImg.name.trim().toLowerCase()) {
          case "scissors":
            break;
          case "lizard":
          case "paper": {
            win = true;
            optctx.scoreIncreaseHandler();
            break;
          }
          default: {
            win = false;
            optctx.scoreDecreaseHandler();
          }
        }
      } else if (pickedImage.name.trim().toLowerCase() === "rock") {
        switch (randomImg.name.trim().toLowerCase()) {
          case "rock":
            break;
          case "lizard":
          case "scissors": {
            win = true;
            optctx.scoreIncreaseHandler();
            break;
          }
          default: {
            win = false;
            optctx.scoreDecreaseHandler();
          }
        }
      } else if (pickedImage.name.trim().toLowerCase() === "lizard") {
        switch (randomImg.name.trim().toLowerCase()) {
          case "lizard":
            break;
          case "spock":
          case "paper": {
            win = true;
            optctx.scoreIncreaseHandler();
            break;
          }
          default: {
            win = false;
            optctx.scoreDecreaseHandler();
          }
        }
      } else if (pickedImage.name.trim().toLowerCase() === "spock") {
        switch (randomImg.name.trim().toLowerCase()) {
          case "spock":
            break;
          case "scissors":
          case "rock": {
            win = true;
            optctx.scoreIncreaseHandler();
            break;
          }
          default: {
            win = false;
            optctx.scoreDecreaseHandler();
          }
        }
      } else if (pickedImage.name.trim().toLowerCase() === "paper") {
        switch (randomImg.name.trim().toLowerCase()) {
          case "paper":
            break;
          case "spock":
          case "rock": {
            win = true;
            optctx.scoreIncreaseHandler();
            break;
          }
          default: {
            win = false;
            optctx.scoreDecreaseHandler();
          }
        }
      }
    }, 500);
    return () => {
      clearTimeout(chooseTimeout);
    };
  }, [pickedImage]);
  const againChooseHandler = () => {
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
        <div className={classes.middle}>
          {machineChoosed.name ? (
            <h1 className={classes.heading}>you {win ? "won" : "Lost"} </h1>
          ) : (
            ""
          )}
          <Button className={classes.btn} callFunction={againChooseHandler}>
            play again
          </Button>
        </div>
        <div className={classes.right}>
          <h1 className={classes.heading}>the house picked</h1>
          {machineChoosed.image && (
            <IndividualImg
              specificName={machineChoosed.name}
              image={machineChoosed.image}
              impClassName={classes.pickedImage}
              commonImg={classes.commonImg}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Picked;
