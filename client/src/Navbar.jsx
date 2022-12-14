import React from 'react';
import './Navbar.css';
import { HiOutlineSearch, AiOutlineShoppingCart, IoLocationOutline } from 'react-icons/all';
function Navbar() {
  return (
    <div className="header">
      <img className="amazon-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      <div className="header">
        <IoLocationOutline color="white" />
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Select your address</span>
        </div>
      </div>
      <div className="search-input-field-with-icon">
        <input className="header__searchInput" type="text" />
        <HiOutlineSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in</span>
          <span className="header__optionLineTwo">Accounts & Lists</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__optionBasket">
          <AiOutlineShoppingCart size="2em" />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
