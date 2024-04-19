import "./card.scss";
import Button from '../../components/button/button.js';
import { useNavigate } from "react-router-dom";

function Card({title, detail, columns, url}) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(url);
    }

    return (
        <div className="box">
            <div>
                <h1>{title}</h1>
                <p>{detail}</p>
                <ul>
                    {columns.map(item => <li key={item}>{item}</li>)}
                </ul>
                <Button onclick={handleClick}>查看</Button>
            </div>
        </div>
    );
}
export default Card;