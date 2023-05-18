
import React from 'react';
import './Header.css';
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <nav className='Nav1'>
        <ul>
        
          <li><a>Patna Bihar, (803212)</a></li>
          <li><a>+91 9576630507</a></li>
        </ul>
      </nav>
      <nav className='Nav2'>
        <ul>
        <li1>
            <a href="/" alt="logo">
              <img src="data:image/jpeg;base64,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" alt="logo" />
            </a>
          </li1>
          <li><a href="/">Home</a></li>
          <li><a href="/buy">Buy</a></li>
          <li><a href="/sell">Sell</a></li>
          <li><a href="/auction">Auction</a></li>
          <li><a href="/signin">Sign In</a></li>
          <li><a href="/signup">Register</a></li>
          <li><a href="/profile"><VscAccount/>Profile</a></li>
          <li><a href="/cart"><AiOutlineShoppingCart/>Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
