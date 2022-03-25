import './App.css';
import Products from './Products/Products';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <div>
        <Products></Products>
        </div>
        <div className="cart">
          cart
        </div>
      </div>
    </div>
  );
}

export default App;
