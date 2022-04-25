
import Classes from "../../CSS/main/Card.module.css"


const Card = (props) => {
    return (<div className={` ${Classes.Card} ${props.className}`}>{props.children}</div >);
}

export default Card;
