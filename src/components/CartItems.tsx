import { useCartSelector, useCartDispatch } from "../store/hooks";
import { addToCart } from "../store/cart-slice";

const CartItems = () => {
  const cartItems = useCartSelector((state) => state.items);
  const dispatch = useCartDispatch();

  return (
    <div id="cart">
      <h1>CART</h1>
      {
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
                  <button>-</button>
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
      }

      {/* <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p> */}
    </div>
  );
};

export default CartItems;
