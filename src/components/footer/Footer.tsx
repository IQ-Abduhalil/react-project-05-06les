import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__tools">
          <div className="footer__tool">
            <p className="footer__tool-title">Funiro.</p>
            <p className="footer__tool-link">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div className="footer__tool">
            <p className="footer__tool-title2">Links</p>
            <ul className="footer__tool-list">
              <li>
                <Link to="/" className="link footer__tool-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link footer__tool-item">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__tool-item">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__tool-item">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__tool">
            <p className="footer__tool-title2">Help</p>
            <ul className="footer__tool-list">
              <li>
                <Link to="/" className="link footer__tool-item">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__tool-item">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__tool-item">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__tool">
            <p className="footer__tool-title2">Newsletter</p>
            <form className="d-flex gap-2">
              <input
                className="footer__input"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button className="footer__submitBtn" type="submit">
                {" "}
                subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="footer__bottom-text">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
