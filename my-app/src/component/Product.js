import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get saved cart items from localStorage
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const isUserSignedIn = () => {
    return localStorage.getItem("user"); // User authentication check
  };

  const saveCartToLocalStorage = (updatedCart) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    if (!isUserSignedIn()) {
      navigate("/signin"); // Redirect if not signed in
      return;
    }

    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart); // Save cart to localStorage
  };

  const buyNow = (product) => {
    if (!isUserSignedIn()) {
      navigate("/signin"); // Redirect if not signed in
      return;
    }

    console.log("Saving to localStorage:", product); // Debug log
    localStorage.setItem("buyNowProduct", JSON.stringify(product));

    navigate("/Order", { state: { product } });
  };


  const products = [
    {
      image: "https://picsum.photos/1501",
      name: "Product 1",
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: "https://picsum.photos/1502",
      name: "Product 2",
      originalPrice: 120,
      discountedPrice: 90,
    },

    {
      image: "https://picsum.photos/1503",
      name: "Product 3",
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: "https://picsum.photos/1505",
      name: "Product 4",
      originalPrice: 120,
      discountedPrice: 90,
    },

    {
      image: "https://picsum.photos/1506",
      name: "Product 5",
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: "https://picsum.photos/1507",
      name: "Product 6",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      image: "https://picsum.photos/1508",
      name: "Product 7",
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      image: "https://picsum.photos/1511",
      name: "Product 8",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      image: "https://picsum.photos/1514",
      name: "Product 9",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      image: "https://picsum.photos/1517",
      name: "Product 10",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      image: "https://picsum.photos/1519",
      name: "Product 11",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      image: "https://picsum.photos/1522",
      name: "Product 12",
      originalPrice: 120,
      discountedPrice: 90,
    },

  ];

  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-prices">
                <span className="original-price">${product.originalPrice}</span>
                <span className="discounted-price">${product.discountedPrice}</span>
              </div>
              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
                <button className="product-buy-now-btn" onClick={() => buyNow(product)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
