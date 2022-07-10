import Choose from "../Choose/Choose";
import classes from "./BodyPart.module.css"

const BodyPart = () =>{
    return <div className={classes.bodyPart}>
        <Choose/>
    </div>
}

export default BodyPart;