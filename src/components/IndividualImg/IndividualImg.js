import classes from "./IndividualImg.module.css";

const IndividualImg = (props) => {

  return (
    <span
      value={props.specificName}
      onClick={props.chooseHandler}
      className={`${classes[props.specificName + "Container"]} ${classes.individualImg} ${props.impClassName}`}
    >
      <img src={props.image} className={`${classes[props.specificName]} ${classes.commonImg} ${props.commonImg}`} />
    </span>
  );
};

export default IndividualImg;