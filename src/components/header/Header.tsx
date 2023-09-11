import "./header.scss";

import Logo from "../../assets/Icons/site-Logo.svg";
import Heart from "../../assets/Icons/heart-icon.svg";
import Profile from "../../assets/Icons/profile-icon.svg";
import Search from "../../assets/Icons/search-icon.svg";
import Shop from "../../assets/Icons/shop-icon.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container header  ">
        <div className="header__left">
          <NavLink className="navlink" to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="navlink" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="navlink" to="/about">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="header__right">
          <button className="header__btn">
            <img src={Profile} alt="icon" />
          </button>
          <button className="header__btn">
            <img src={Heart} alt="icon" />
          </button>
          <button className="header__btn">
            <img src={Search} alt="icon" />
          </button>
          <button className="header__btn">
            <img src={Shop} alt="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
