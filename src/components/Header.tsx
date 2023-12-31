import { useState } from "react";
import { useCartSelector } from "../store/hooks";
import Cart from "./Cart";


const Header = () => {
  const cartAmount = useCartSelector(state => state.items.length)
  const [cartIs, setCartIs] = useState<Boolean>(false)

  const handleCartOpen = () => {
    setCartIs((prev) => !prev)
  }

  return (
    <>
      {cartIs && <Cart />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleCartOpen}>Cart {cartAmount}</button>
        </p>
      </header>
    </>
  );
};

export default Header;
