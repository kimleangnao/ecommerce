import Navbar from "./Navbar";


import jumpingImage from "../resources/images/jumping-woman.jpg";


const Home = () => {
    return(
        <div className="home" style={{backgroundImage: `url(${jumpingImage})`, backgroundPosition: "0 -100px"}}>
            <Navbar />
            <div className="home_bigtext">
                ALL YOU NEED SPORTSWEAR
            </div>
            <div className="home_box">
                SHOP HERE
            </div>
            <div className="home_slogan">
                GO BEYOND LIMITS
            </div>
        </div>
    )
}


export default Home;