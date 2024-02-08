import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <img id="logo" src={logo} alt="Logo_pic" />
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/coins">Coins</Link>
          </li>
          <li>
            <Link to="/exchanges">Exchanges</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
