const producto = 
  [{
    id: 1,
    tittle: "Remera Rosa 2",
    category:"remera",
    stock: 97,
    img: "/imagen/remeraRosa.jpeg",
    price: 220,
    discount: 25,
  }, {
    id: 2,
    tittle: "Remera azul 2",
    category:"remera",
    stock: 89,
    img: "/imagen/remeraAzul.jpg",
    price: 500,
  }, {
    id: 3,
    tittle: "Levis Logo 2",
    category:"logo",
    stock: 68,
    img: "/imagen/levislogo.webp",
    price: 1761,
  }, {
    id: 4,
    tittle: "Remera Verde",
    category:"remera",
    stock: 66,
    img: "/imagen/remeraVerde.jpeg",
    price: 748,
    discount: 25,
  }, {
    id: 5,
    tittle: "Remera Rosa",
    category:"remera",
    stock: 19,
    img: "/imagen/remeraRosa.jpeg",
    price: 952,
  }, {
    id: 6,
    tittle: "Levis Logo",
    category:"logo",
    stock: 69,
    img: "/imagen/levislogo.webp",
    price: 1457
  }, {
    id: 7,
    tittle: "Remera azul",
    stock: 18,
    img: "npm install firebase",
    price: 388,
  }, {
    id: 8,
    tittle:"Remera Verde",
    stock: 58,
    img: "/imagen/remeraVerde.jpeg",
    price: 834,
  },
  ];


const obtenerProductos = () =>{
    return new Promise ((resolve, reject) => {
        
        let error = false;
    
        setTimeout(()=> {
            if (error)
    reject("usuario no encontrado");
    
    else
    resolve(producto);
        },1000);   
    });
} 


const obtenerProduct = (idURL) =>{
  return new Promise ((resolve, reject) => {
     
const reqItem = producto.find((item)=>{return (item.id === parseInt (idURL))});
 
setTimeout(()=> {

  if (reqItem) resolve(reqItem);
  else reject("No se encontro el producto");
      },1000);   
  });
}; 


const byCategory = (categoryURL) =>{
  return new Promise ((resolve, reject) => {
     
    let reqItem = producto.filter(item => item.category === categoryURL);
  setTimeout(() => {
    resolve(reqItem)
  },2000)
 });
  };

export default obtenerProductos;
export { obtenerProduct, byCategory };
