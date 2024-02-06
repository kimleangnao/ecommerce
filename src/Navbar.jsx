
import logo from "../resources/images/logo.png"

const Navbar  = ({showCart, color}) => {
    let showTheCart = showCart ? true : false;

    return(
        <div className="navbar">
            <div className="navbar_rect" style={{color: `${color}`}}>
                <div className="navbar_rect_text">
                    Trend
                </div>
                <div className="navbar_rect_text">
                    Atheltic
                </div>
                <div className="navbar_rect_text">
                    Men
                </div>
                <div className="navbar_rect_text">
                    Women
                </div>
            </div>
            <div className="navbar_box">
                <img src={logo} alt="not found" className="navbar_box_image" />
            </div>
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