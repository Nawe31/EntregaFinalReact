import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";

function CardWidget (){

    const contexto= useContext(cartContext)
    return(
        <li>
        <Link className="navbar-brand" to="/cart">
        <img src="/imagen/carrito.png" height="50px" alt="./" />
        <span>{contexto.cart.length}</span>
        </Link>
        </li>
    );
}

export default CardWidget;