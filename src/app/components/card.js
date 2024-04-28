import "./card.scss";
import { useNavigate } from "react-router-dom";

function Card({title, url}) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(url);
    }

    return (
        <h1 className="box" onClick={handleClick}>
            {title}
        </h1>
    );
}
export default Card;