import CartItems from "./CartItems";

const Cart = () => {
  return (
    <>
    <div className="cart-backdrop" />
    <dialog id="cart-modal" open>
      <h2>Your Cart</h2>
      <CartItems />
      <p id="cart-actions">
        <button>Close</button>
      </p>
    </dialog>
  </>,
  );
};

export default Cart;
