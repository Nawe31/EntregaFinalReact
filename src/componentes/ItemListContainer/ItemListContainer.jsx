import {useState, useEffect} from "react";
import { byCategory } from "../../service/firebaje";
import { obtenerProductos } from "../../service/firebaje";
import Item from "./Item";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./alert.css"


function ItemListContainer(){
 const [producto, setProducto] = useState([]);
 const [isLoading,setIsLoading]=useState(true);
 const[alertText,setAlertText]= useState();
 let {categoryid} = useParams();

 

useEffect(()=>{

  if (!categoryid){
  obtenerProductos().then((respuesta)=>{
    setProducto(respuesta);
    setAlertText({Text: "item cargado correctamente", type :"default"})
  })
.catch((error)=> {
  setAlertText({Text:error, type:"danger"})
})
.finally(
  ()=> setIsLoading(false)
)
}
else
{
  byCategory(categoryid)
  .then((respuesta)=>{
    setProducto(respuesta);
    
})
.finally(()=>setIsLoading(false))

}
},[categoryid]);



if (isLoading) return <Loader/>
else
return (
  <Flex>
    {alertText && (<div className="alert_container"> <span style={{backgroundColor: alertText.type === "danger" ? "red" : "lightblue",}} className={`alert alert_${alertText.type}`}> {alertText.Text}
    </span></div>)}
<Flex>
     {
      producto.map((ItemItinerado)=>{
      return <Item key={ItemItinerado.id} id={ItemItinerado.id} 
        item={ItemItinerado}
        />;})}
    </Flex>
    </Flex>
);
/*return(
  <>

  { 
  isLoading? 
  <h3> cargando.. </h3>
  :
   <Flex>
     {
      producto.map((ItemItinerado)=>{
      return <Item key={ItemItinerado.id} id={ItemItinerado.id} 
        item={ItemItinerado}
        />;})}
    </Flex>
}
  </>

      
);*/

}
 export default ItemListContainer;