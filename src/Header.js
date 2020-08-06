import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
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
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/*3 Links*/}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/*basket icon w number*/}
      <Link to="/checkout">
        <div className="header__optionBasket">
          {/* Shopping basket icon*/}
          <ShoppingBasketIcon />

          {/* Number of items in basket*/}
          {<span className="header__optionLineTwo header__basketCount">0</span>}
        </div>
      </Link>
    </nav>
  );
}

export default Header;
