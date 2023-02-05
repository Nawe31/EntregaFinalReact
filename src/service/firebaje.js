
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where,addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCF2hvbD1SK2BYmF3W1IGvTpC9jrKZzC6U",
  authDomain: "nawe1337.firebaseapp.com",
  projectId: "nawe1337",
  storageBucket: "nawe1337.appspot.com",
  messagingSenderId: "768857984166",
  appId: "1:768857984166:web:77d7709d98002bcbfc3867"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductos() {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef)
   

    const products = snapshot.docs.map((elem)=> {
      let produc = elem.data();
      produc.id = elem.id;
      return produc;
    });

    return products;
  }


  
  
  export async function obtenerProduct(idURL){
    const productsRef = collection(db, "products");
     const docRef=doc(productsRef,idURL)
     const snapshot = await getDoc (docRef);
     return {...snapshot.data(), id:snapshot.id}


  }


  export async function byCategory (categoryURL){
    const productsRef = collection(db, "products");
    const q = query(productsRef, where ("category", "==", categoryURL));
     
    const snapshot = await getDocs(q)
   

    const products = snapshot.docs.map((elem)=> {
      let produc = elem.data();
      produc.id = elem.id;
      return produc;
    });

    return products;
  }

export async function createOrder(order){
const orderRef = collection(db, "order")
/*
  addDoc(orderRef, order).then(respuesta => {
  console.log(respuesta);
  console.log(respuesta.id);
});*/

let respuesta = await addDoc(orderRef,order);
console.log(respuesta,respuesta.id);
return respuesta.id;

}

export async function exportArray(){
  
  const productos = 
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



  for (let item of productos) {
    item.index = item.id;
    delete item.id;
    addDoc(collection(db, "productos"), item).then((respuesta) =>
      console.log("item creado: ", respuesta.id)
    );
  }
}




export default db;
