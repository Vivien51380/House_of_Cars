import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import NavbarHome from "../components/layout-components/NavbarHome/NavbarHome";
import Footer from "../components/layout-components/Footer/Footer";
import notfound from "../assets/lottie/notfound.json";
import "../assets/styles/NotFound.css";

export default function NotFound() {
  return (
    <>
      <NavbarHome />
      <div className="notFoundContainer">
        <Player autoplay loop src={notfound} className="notFoundLottie" />
        <Link to="/">
          <button type="button" className="notFoundButton">
            Go Back
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
