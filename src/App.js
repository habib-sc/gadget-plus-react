import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <div className="app-body">
        <div className='app-left'>
          <Products addToCart={addToCart}></Products>
        </div>
        <div className="cart">
          <Cart resetCart={resetCart} cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
