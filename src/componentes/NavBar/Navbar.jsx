import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import CardWidget from "./CardWidget/CardWidget";
import Navitem from "./Navitem";


function Navbar(props){
 
   const context = useContext(cartContext);
   context.test();
    
    function handleSubmit(evt){
        evt.preventDefault();
        let user = (evt.target.elements[0].value);
        props.onLogin(user);
    
    }
    return(
        <>
        <nav className= "navbar navbar-dark bg-dark">
         <div className="container-fluid">
         <Navitem href="/"> LogoTIENDA </Navitem>
         <Link to='/category/remera'>Remera</Link>
        <Link to='/category/logo'>Logos</Link>
        <Link to='/formulario'>formulario</Link>
        <Link to="cart"><CardWidget/></Link>
        <Button onClick={props.onLogout}>Log Out:</Button>
       <form onSubmit={handleSubmit}>iniciar sesion
        <input name="user"></input>
       </form>
                  
       </div>
        </nav>
        </>
    );
}

export default Navbar;