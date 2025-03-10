import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './Cart.css';
import Navbar from '../component/Navbar';
import { DarkModeContext } from '../component/DarkModeContext';
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";

const Cart = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // Firebase Auth check
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Load cart only if the user is logged in
  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart).map(item => ({
          ...item,
          quantity: item.quantity || 1 // Ensure quantity is at least 1
        })));
      }
    }
  }, [user]);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const updateCart = (newCart) => {
    setCartItems([...newCart]); // Ensure re-render by spreading into a new array
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
  };

  const buyNow = (product) => {
    navigate("/Order", { state: { product } });
  };

  const buyAll = () => {
    if (cartItems.length > 0) {
      navigate("/Order", { state: { product: cartItems } });
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleDarkMode} theme={isDarkMode ? 'dark' : 'light'} />
      <div className={`cart-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <h2>Your Cart List</h2>

        {!user ? (
          <p>Please <button onClick={() => navigate('/login')}>Login</button> to view your cart.</p>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                    </td>
                    <td>${item.discountedPrice.toFixed(2)}</td>
                    <td>
                      <button className="quantity-btn" onClick={() => decreaseQuantity(index)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="quantity-btn" onClick={() => increaseQuantity(index)}>+</button>
                    </td>
                    <td>${(item.discountedPrice * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="remove-from-cart-btn" onClick={() => removeFromCart(index)}>Remove</button>
                      <button className="buy-now-btn" onClick={() => buyNow(item)}>Buy Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>Total Price: ${calculateTotalPrice().toFixed(2)}</h4>
            <button className="buy-all-btn" onClick={buyAll}>Buy All</button>
            <button className="back-to-products-btn" onClick={() => navigate('/')}>Back to Products</button>
          </>
        )}
      </div>
      <Footer />
      <SubFooter />
    </>
  );
};

export default Cart;
