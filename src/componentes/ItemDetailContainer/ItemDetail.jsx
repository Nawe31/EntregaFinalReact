import React from 'react'
import Button from '../Button/Button';
import ItemCount from '../Contador/ItemCount'


function ItemDetail({tittle, img, price, detail,onAddToCart,isInCart, stockUpdate}) {



 

  return (
    <>

    <div>
    <h3>{tittle}</h3>
    <br/>
    <img height="220px" src={img} alt="" />
    <h3>${price}</h3>
    <small>{detail}</small>
    { isInCart?(
    <a href="/cart">
    <Button> ir al carrito </Button>
    </a>)
    :
    (
    <ItemCount stock={stockUpdate} onAddToCart={onAddToCart} />)
}
    
  
     </div>

</>
  );
}

export default ItemDetail