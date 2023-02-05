import React, {useState}from "react";
import Button from "../Button/Button";

function ItemCount({onAddToCart, stock}){

    const [ count, setCount] = useState(1);
    


    function handleSuma() {
if ( count < stock)
setCount(count+1);}

    function handleResta() {setCount(count-1);}

    return(
    
        <div style={{ display:"flex", border:"solid 1px black", padding:"15px" }}>
            Agregar al carrito
            <Button onClick={handleResta}>-
            </Button >
            <p>{count}</p>
            <Button  onClick={handleSuma}>+
            </Button >
            <Button onClick={() => onAddToCart(count)} >Agregar al carrito</Button >
        </div>
    )

}

export default ItemCount;