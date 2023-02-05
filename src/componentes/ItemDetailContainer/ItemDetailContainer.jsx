import React, {useState, useEffect,useContext} from 'react'
import { obtenerProduct } from '../../service/firebaje';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';

function ItemDetailContainer() {
    const [Product, setProduct] = useState({tittle:"cargando.."});
   const [isInCart,setIsInCart]= useState(false)


     let params = useParams(); 
     const { cart, addToCart } = useContext(cartContext);

     function handleAddToCart(count){
      setIsInCart(true);
     const ProductAndCount = {...Product, count:count}
      addToCart(ProductAndCount);
     }
     
     function checkStock(){
     let itemInCart = cart.find((item) => item.id === Product.id);

     let stockUpdate = Product.stock;

     if (itemInCart){
     stockUpdate = Product.stock - itemInCart.count;}

     return stockUpdate;
     }

    useEffect(()=>{
      obtenerProduct(params.itemid).then((respuesta)=>{
        setProduct(respuesta)
      })
      .catch((error)=> alert(error));
    },)
    
    
    
    return(
        <ItemDetail
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
         tittle={Product.tittle}
         img={Product.img}
         price={Product.price} 
         detail={Product.detail}
         stockUpdate={checkStock()}
         />
         

     );
}

export default ItemDetailContainer