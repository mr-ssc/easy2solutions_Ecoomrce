import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Order.css";
import Navbar from "../component/Navbar";
import { DarkModeContext } from "../component/DarkModeContext"; // Import DarkModeContext
import { useNavigate } from "react-router-dom";


const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const { isDarkMode } = useContext(DarkModeContext); // Access dark mode state

  useEffect(() => {
    if (location.state?.product) {
      console.log("Product received via navigation:", location.state.product); // Debug log
      setProduct(location.state.product);
      localStorage.setItem("buyNowProduct", JSON.stringify(location.state.product));
    } else {
      const savedProduct = localStorage.getItem("buyNowProduct");
      if (savedProduct) {
        console.log("Product retrieved from localStorage:", JSON.parse(savedProduct)); // Debug log
        setProduct(JSON.parse(savedProduct));
      } else {
        console.log("No product found in localStorage!"); // Debug log
      }
    }
  }, [location.state]);

  if (!product) {
    return <h2>No product selected!</h2>;
  }

  return (
    <>
      <Navbar />
      <div className={`order-container ${isDarkMode ? "dark-mode" : ""}`}>
        <h2>Order Summary</h2>
        <div className="order-card">
          <img src={product.image} alt={product.name} className="order-image" />
          <div className="order-details">
            <h3>{product.name}</h3>
            <p>
              <strong>Original Price:</strong>{" "}
              <span className="original-price">${product.originalPrice}</span>
            </p>
            <p>
              <strong>Discounted Price:</strong>{" "}
              <span className="discounted-price">${product.discountedPrice}</span>
            </p>
            <button className="confirm-order-btn">Confirm Order</button>
          </div>
        </div>
      </div>
      <button className="back-to-products-btn" onClick={() => navigate('/')}>Back to Products</button>
    </>
  );
};

export default Order;
