import React, { useContext } from 'react';
import './Customer.css';
import { DarkModeContext } from './DarkModeContext'; // Import the DarkModeContext

const Customer = () => {
  const { isDarkMode } = useContext(DarkModeContext); // Use the context

  const customers = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      purchase: '$120', 
      image: 'https://picsum.photos/150', 
      review: 'Great service and quality products!', 
      rating: 5 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      purchase: '$250', 
      image: 'https://picsum.photos/151', 
      review: 'Amazing experience!', 
      rating: 4 
    },
    { 
      id: 3, 
      name: 'Alice Johnson', 
      email: 'alice@example.com', 
      purchase: '$80', 
      image: 'https://picsum.photos/153', 
      review: 'Loved the products!', 
      rating: 5 
    },
    { 
      id: 4, 
      name: 'Bob Brown', 
      email: 'bob@example.com', 
      purchase: '$150', 
      image: 'https://picsum.photos/154', 
      review: 'Very satisfied!', 
      rating: 4 
    },
    { 
      id: 5, 
      name: 'Charlie Davis', 
      email: 'charlie@example.com', 
      purchase: '$200', 
      image: 'https://picsum.photos/155', 
      review: 'Excellent customer service!', 
      rating: 5 
    },
    { 
      id: 6, 
      name: 'Eve White', 
      email: 'eve@example.com', 
      purchase: '$90', 
      image: 'https://picsum.photos/160', 
      review: 'Will definitely buy again!', 
      rating: 4 
    },
  ];

  return (
    <div className={`customer-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Happy Customers</h1>
      <div className="customer-list">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          {customers.map((customer) => (
            <div key={customer.id} className="customer-card">
              <img 
                src={customer.image} 
                alt={customer.name} 
                className="customer-image" 
                onError={(e) => { 
                  e.target.src = 'https://via.placeholder.com/151'; // Fallback image if the original fails
                }} 
              />
              <div className="customer-info">
                <h2>{customer.name}</h2>
                <p>{customer.email}</p>
                <p>Total Purchase: <strong>{customer.purchase}</strong></p>
                <p>{customer.review}</p>
                <div className="customer-rating">
                  {Array.from({ length: customer.rating }, (_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <button className="view-details-btn">View Details</button>
            </div>
          ))}
        </marquee>
      </div>
      
    </div>
  );
};

export default Customer;