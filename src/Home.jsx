

import { Link } from "react-router-dom";
import jumpingImage from "../resources/images/jumping-woman.jpg";



const Home = () => {
    return(
        <div className="home">
            <img src={jumpingImage} alt="jumping_women" className="home_absoluteBackground" />
            <div className="home_bigtext">
                ALL YOU NEED SPORTSWEAR
            </div>
            <Link to="/search" className="home_box">
                SHOP HERE
            </Link>
            <div className="home_slogan">
                GO BEYOND LIMITS
            </div>
        </div>
    )
}


export default Home;