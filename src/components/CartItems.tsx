import { useCartSelector, useCartDispatch } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/cart-slice";

const CartItems = () => {
  const cartItems = useCartSelector((state) => state.items);
  const dispatch = useCartDispatch();
  const formattedTotalPrice = cartItems
    .reduce((val, item) => val + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div id="cart">
      {cartItems.length === 0 && <p>No items in cart!</p>}

      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        description: item.description,
                        title: item.title,
                        quantity: item.quantity,
                        price: item.price,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

export default CartItems;
