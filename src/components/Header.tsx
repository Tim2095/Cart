import { useCartSelector } from "../store/hooks";

const Header = () => {
  const cartAmount = useCartSelector(state => state.items.length)

  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button>Cart {cartAmount}</button>
        </p>
      </header>
    </>
  );
};

export default Header;
