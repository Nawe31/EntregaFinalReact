const maxPriceForItem = 200;
 let filtro = cart.filter(item =>{
   return (item.price * item.count <= maxPriceForItem)
  
});
console.log(filtro);