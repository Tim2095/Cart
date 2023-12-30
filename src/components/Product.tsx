import { useCartDispatch } from "../store/hooks";
import { addToCart } from "../store/cart-slice";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

const Product = ({ id, title, description, price, image }: Product) => {
  const dispatch = useCartDispatch()

  const addToCartHandler = () => {
    dispatch(addToCart({id: id, title: title, description: description, price: price, quantity: 1}))
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};

export default Product;
