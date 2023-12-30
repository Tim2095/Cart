import { useCartSelector } from "../store/hooks";

const Header = () => {
  const cartAmount = useCartSelector(state => state.items.length)
  const items = useCartSelector(state => state.items)
  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button>Cart {cartAmount}</button>
          {items.map(item => <p>{item.title}</p> )}
        </p>
      </header>
    </>
  );
};

export default Header;
