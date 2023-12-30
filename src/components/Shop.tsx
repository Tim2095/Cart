import { ReactNode } from "react";

type Shop = {
  children: ReactNode;
};

const Shop = ({ children }: Shop) => {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">{children}</ul>
    </section>
  );
};

export default Shop;
