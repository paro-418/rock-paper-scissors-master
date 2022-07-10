import Choose from "../Choose/Choose";
import classes from "./BodyPart.module.css";
import { useContext } from "react";
import optContext from "../store/data-ctx";
import Picked from "../Picked/Picked";

const BodyPart = (props) => {
  const optctx = useContext(optContext);

  return (
    <div className={classes.bodyPart}>
      {optctx.choosed.trim().length === 0 && <Choose />}
      {optctx.choosed.trim().length > 0 && <Picked />}
    </div>
  );
};

export default BodyPart;
