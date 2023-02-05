
import { createContext , useState, useContext} from "react";
import { useDeepCopy } from "../hooks/useDeepCopy";

export const cartContext = createContext ();


function CartProvider(props){
let [cart, setCart] = useState([]);
let newCart = useDeepCopy(cart)





const test = () => console.log("test");
    



function addToCart(item){
      

   let isInCart = cart.findIndex(itemInCart=>itemInCart.id===item.id)
   
   
   
        if(isInCart !==-1){
          //newCart[isInCart]
          alert("ya lo tienes agregado")
        }
        else{
        
        newCart.push(item);
        setCart(newCart);}

       // setCart([...cart,item])
    }

    function removeItem(itemInCart) {
      
      
    }

    function clear (itemInCart) {
      setCart([]);
    }
  
    function getTotalItemsInCart() {
      // reduce 👌
  
    
      // por Cada producto(for, forEach) -> total += producto.count
      return cart.length;
}
  
    function getTotalPriceInCart() {
      let total = 0;
      return total;
    }
  
 
   
    return (
      //3. Retornamos el Provider del context con un value personalizado
      <cartContext.Provider
        value={{
          cart,
          test,
          addToCart,
          getTotalItemsInCart,
          getTotalPriceInCart,
          removeItem,
          clear,
        }}
      >
        {/* 4. Renderizamos los children */}
        {props.children}
      </cartContext.Provider>
    );
  }


export function useCartContext(){
return useContext(cartContext);

  }
export {CartProvider};
