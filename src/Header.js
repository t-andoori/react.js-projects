import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      {/*logo on left img*/}{" "}
      <Link to="/">
        <img
          className="header__logo"
          alt="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/*search box*/}
      <input type="text" className="header__searchInput" />
      {/*3 Links*/} {/*basket icon w number*/}
    </nav>
  );
}

export default Header;
