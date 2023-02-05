import { Link } from "react-router-dom";

const Navitem = ({children, href})=> {
    return(
    <li  className="nav-item">
    <Link to={href}>{children}</Link>
    </li>
    );
}

export default Navitem;