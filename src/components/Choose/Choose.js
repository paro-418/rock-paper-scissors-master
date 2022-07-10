import classes from "./Choose.module.css";
import pentagon from "../../images/bg-pentagon.svg";
import { useContext } from "react";
import optContext from "../store/data-ctx";
import IndividualImg from "../IndividualImg/IndividualImg";

const Choose = () => {
  const optctx = useContext(optContext);

  const chooseHandler = (event) => {
    optctx.whatChoosedReceiver(event.currentTarget.getAttribute("value"));
  };

  return (
    <div className={classes.choose}>
      <img src={pentagon} className={classes.pentagon} />

      {optctx.options.map((obj, index) => (
        <IndividualImg
          key={index}
          specificName={obj.name}
          chooseHandler={chooseHandler}
          image={optctx.options[index].image}
        />
      ))}
    </div>
  );
};

export default Choose;
