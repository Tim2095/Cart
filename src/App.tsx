import { DUMMY_PRODUCTS } from "./dummy_products";
import Product from './components/Product'
import Shop from './components/Shop';
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;
