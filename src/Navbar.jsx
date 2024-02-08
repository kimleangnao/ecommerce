
import { Link } from "react-router-dom";
import logo from "../resources/images/logo.png"

const Navbar  = ({showCart, color}) => {
    let showTheCart = showCart ? true : false;

    return(
        <div className="navbar">
            <div className="navbar_rect" >
                <Link to="/search" className="navbar_rect_text" style={{color: `${color}`}}>
                    Search
                </Link>
                <Link to="/athlete" className="navbar_rect_text" style={{color: `${color}`}}>
                    Athletes
                </Link>
                <Link to="/search" className="navbar_rect_text" style={{color: `${color}`}}>
                    Men
                </Link>
                <Link to="/search" className="navbar_rect_text" style={{color: `${color}`}}>
                    Women
                </Link>
            </div>
            <Link to="/" className="navbar_box">
                <img src={logo} alt="not found" className="navbar_box_image" />
            </Link>
            <div className="navbar_logo">
                {
                    showTheCart ? 
                        ( <div className="navbar_logo_circle" style={{background: `${color}`}}>

                        </div>) 
                    : ""
                }
                <div className="navbar_logo_circle" style={{background: `${color}`}}>

                </div>
            </div>
        </div>
    )
}

export default Navbar;