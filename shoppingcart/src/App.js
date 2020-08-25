import React, { useState } from 'react';
import './App.css';
import shopProducts from './static/products'
import Products from './components/Products';
import Cart from './components/Cart';
import { useAuth0 } from '@auth0/auth0-react';
import {Spinner, Button} from 'react-bootstrap'



function App() {
  const [cart, updateCart] = useState([])
  const [viewCart, setView] = useState(false);
  const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
  // const isAuth = true
  const cartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  }

  const toggleCart = () => {
    setView(prev => !prev);
  }

  if (isLoading) {
    return (
      <div className="loading">
        <Spinner animation="border" />
      </div>)
  }

  if (isAuthenticated) {
    return (
      <div className="App">
        <div className="inApp">
          <header className="header">
            <Button onClick={() => toggleCart()}>{viewCart?'Shop for more!':'Checkout Cart - '+cartTotal()}</Button>
            <Button onClick={() => logout()}> Logout </Button>
          </header>
          
          {!viewCart && <Products cart={cart} products={shopProducts} updateCart={updateCart} />}
          {viewCart && <Cart cart={cart} updateCart={updateCart} />}

        </div>
      </div>
    );
  }

  return (
    <div className="logindiv">
      <Button variant="danger" size="lg" onClick={() => loginWithRedirect()}> Press to Login / Signup </Button>
    </div>
  )
}

export default App;
