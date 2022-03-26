import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Qa from './components/Qa/Qa';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {

  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addToCart = (product) => {
    const newCart = [...cart, product];
    for (const cartItem of cart) {
      if ( cartItem.id === product.id ){
        const newText = "The Product Allready Added In Cart";
        setModalText(newText);
        openModal();
        return;
      }
    }
    if (cart.length > 3) {
      const newText2 = "Maximum 4 items you can add in your cart.";
      setModalText(newText2);
      openModal();
      return;
    }
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
      <Qa></Qa>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className='modal-container'>
          <button onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="modal-close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <h3>{modalText}</h3>
        </div>
      </Modal>
    </div>
  );
}

export default App;
