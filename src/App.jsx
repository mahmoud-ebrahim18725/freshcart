import StoreProvider from './app/StoreProvider'
import Router from './router/Router'
import "./styles/layout.css";
import "./styles/products.css";
import "./styles/cart.css";
import "./styles/product-details.css";
import "./styles/not-found.css";

function App() {

  return (
    <StoreProvider>
      <Router/>
    </StoreProvider>
  )
}

export default App
