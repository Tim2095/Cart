import { DUMMY_PRODUCTS } from "./dummy_products";
import Product from './components/Product'
import Shop from './components/Shop';
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default App;
