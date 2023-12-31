import CartItems from "./CartItems";
import { createPortal } from "react-dom";

type CloseCart = {
  onClose: () => void;
};

const Cart = ({ onClose }: CloseCart) => {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
};

export default Cart;
