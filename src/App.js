import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <div className='app-left'>
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
