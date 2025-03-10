import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Order.css";
import Navbar from "../component/Navbar";
import { DarkModeContext } from "../component/DarkModeContext";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (location.state?.product) {
      console.log("Product(s) received via navigation:", location.state.product);
      setProducts(Array.isArray(location.state.product) ? location.state.product : [location.state.product]);
      localStorage.setItem("buyNowProduct", JSON.stringify(location.state.product));
    } else {
      const savedProduct = localStorage.getItem("buyNowProduct");
      if (savedProduct) {
        console.log("Product(s) retrieved from localStorage:", JSON.parse(savedProduct));
        setProducts(JSON.parse(savedProduct));
      } else {
        console.log("No product(s) found in localStorage!");
      }
    }
  }, [location.state]);

  if (products.length === 0) {
    return <h2>No products selected!</h2>;
  }

  const calculateTotalPrice = () => {
    return products.reduce((total, item) => total + item.discountedPrice * (item.quantity || 1), 0).toFixed(2);
  };

  const confirmOrder = () => {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Remove ordered products from cart
    const updatedCart = cartItems.filter(cartItem =>
      !products.some(orderItem => orderItem.id === cartItem.id)
    );

    // Update localStorage with the new cart items
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Optionally, clear order details from localStorage
    localStorage.removeItem("buyNowProduct");

    alert("Order confirmed successfully!");
    navigate("/"); // Redirect to the home page
  };

  return (
    <>
      <Navbar />
      <div className={`order-container ${isDarkMode ? "dark-mode" : ""}`}>
        <h2>Order Summary</h2>

        {products.map((product, index) => (
          <div key={index} className="order-card">
            <img src={product.image} alt={product.name} className="order-image" />
            <div className="order-details">
              <h3>{product.name}</h3>
              <p><strong>Original Price:</strong> <span className="original-price">${product.originalPrice.toFixed(2)}</span></p>
              <p><strong>Discounted Price:</strong> <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span></p>
              <p><strong>Quantity:</strong> {product.quantity || 1}</p>
            </div>
          </div>
        ))}

        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <button className="confirm-order-btn" onClick={confirmOrder}>Confirm Order</button>
        <button className="back-to-products-btn" onClick={() => navigate('/')}>Back to Products</button>
      </div>
    </>
  );
};

export default Order;
