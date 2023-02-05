import React from 'react'
import Button from '../Button/Button';
import { useCartContext } from "../../storage/cartContext";
import { createOrder } from '../../service/firebaje';
import Swal from "sweetalert2";



function CartContainer() {


  const{ cart,removeItem,getTotalPriceInCart,clear} = useCartContext();
  
  function handleCheckout(evt){
    const items = cart.map( ({id,price,tittle,count}) => ({id,price,tittle,count}))
const order = {
buyer: {
name:"santiago",
email:"s@s.com",
phone:"123456",
},

items:cart,

total: getTotalPriceInCart(),
date: new Date()

}


createOrder(order).then((id) => {
  Swal.fire({
    title: "Gracias por tu compra!",
    text: `este es tu ticket id: ${id}`,
    icon: "success",
    confirmButtonText: "Ok!",
  });});

  

}

    return (
        <div>
  {cart.map(ItemInCart =>(
    <div>
<h2>{ItemInCart.tittle}</h2>
<h4>{ItemInCart.price}</h4>
<h4>{ItemInCart.count}</h4>
<td>
                <img height={50} src={ItemInCart.img} alt={ItemInCart.tittle} />
              </td>
    <Button onClick={()=>removeItem(ItemInCart)} color="red">X</Button>
    <Button onClick={()=>clear(ItemInCart)} > Vaciar Carrito</Button>
    
   

  </div> 

    
  ))}
  <p>El total de tu compra es ${getTotalPriceInCart()}</p>
 
   <Button onClick={handleCheckout}> Finalizar Compra</Button>
  
  </div>



  )
}

export default CartContainer;