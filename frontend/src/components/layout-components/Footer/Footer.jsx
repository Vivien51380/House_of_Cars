import { Link } from "react-router-dom";
import "./Footer.css";
import twitter from "../../../assets/img/social/twitter.svg";
import facebook from "../../../assets/img/social/facebook.svg";
import instagram from "../../../assets/img/social/instagram.svg";

export default function Footer() {
  const twitterLink = "https://twitter.com/housecars16";
  const facebookLink = "https://www.facebook.com/profile.php?id=100089712330412";
  const instagramLink = "https://www.instagram.com/houseofcars16/?hl=fr";

  return (
    <footer>
      <div className="container-team">
        <p id="copyrigth">House of Cars</p>
        <Link to="/Credits">- Team</Link>
      </div>
      <div className="container-social">
        <a href={twitterLink} target="twitter icon social">
          <img src={twitter} alt="twitter" className="social" />
        </a>
        <a href={facebookLink} target="facebook icon social">
          <img src={facebook} alt="twitter" className="social" />
        </a>
        <a href={instagramLink} target="instagram icon social">
          <img src={instagram} alt="twitter" className="social" />
        </a>
      </div>
    </footer>
  );
}
