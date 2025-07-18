import React, { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import cart from "../assets/shopping-cart.svg";
import CartDetails from "../movieBox/CartDetails";
import { MovieContext, ThemeContext } from "../Context";

function Header() {
  const [showCart, setShowCart] = useState(false);

  const { cartData } = useContext(MovieContext);

  const {darkMode, setDarkMode} = useContext(ThemeContext)
  

  const handleShowCart = () => {
    setShowCart(true);
  };
  return (
    <header>
      {showCart && <CartDetails onCloseCart={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} alt="ring" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode(darkMode => !darkMode)  }
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={darkMode ? sun :moon} width="24" height="24" alt="moon" />
            </a>
          </li>
          <li>
            <a
              onClick={handleShowCart}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cart} width="24" height="24" alt="cart" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white text-center p-[2px] w-[30px] h-[30px] ">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
