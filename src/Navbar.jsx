
import logo from "../resources/images/logo.png"

const Navbar  = () => {
    return(
        <div className="navbar">
            <div className="navbar_rect">
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
                <div className="navbar_logo_circle">

                </div>
            </div>
        </div>
    )
}

export default Navbar;