import { Link } from "react-router-dom";
import Button from "../Button/Button";



function Item(props) {
const{tittle,price,img,detail,id,discount} = props.item;

return(
<>

    <div className="item-card">
    <div className="item-card_header">
    <h2>{tittle}</h2>
    </div>
    <br/>
    <div className="item-card_img" >
    <img height="220px" src={img} alt="" />
    </div>
    <h3>${price}</h3>
    {
     discount ?
     <h4> desciento:{discount}%</h4>
     : ""
    }
    <small>{detail}</small> 
    
    <Link to={`/detalle/${id}`}>

    <Button padding="8px 12px"  className="btn" text="Click Me" />
    </Link>
    </div>

</>
);
}
export default Item;
