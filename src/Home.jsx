import { Link } from "react-router-dom";
import backgroundImage from "../resources/images/horse-background-expand.jpg";
import backgroundImage2 from "../resources/images/background-image.jpg";
import NavbarExtend from "./NavbarExtend";
import MobileNav from "./MobileNav";
const Home = ({ shoppingCart }) => {
  return (
    <div className="home">
      <NavbarExtend
        currentPage={"home"}
        shoppingCart={shoppingCart}
        colorText="white"
        backgroundColor="rgba(252, 249, 249, 0.09)"
      />
      <MobileNav />
      <img
        src={backgroundImage2}
        alt="jumping_women"
        className="home_absoluteBackground"
      />
      {/*div className="home_slogan">GO BEYOND LIMITS</div>*/}
      <div className="home_wrapper">
        <div className="home_slogan">NEW ARRIVAL</div>
        <Link to="/trend" className="home_arrivalbtn">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Home;
