type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

const Product = ({ id, title, description, price, image }: Product) => {
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
          <button>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};

export default Product;
