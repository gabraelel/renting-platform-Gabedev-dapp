// src/components/BNBPrice/BNBPrice.js
import React, { useState, useEffect } from 'react';
import './BNBPrice.css'; // Optional: If you have specific styles

const BNBPrice = () => {
  const [price, setPrice] = useState(null);

  // Function to fetch BNB price from Binance
  const fetchBNBPrice = async () => {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
      const data = await response.json();
      setPrice(data.price);
    } catch (error) {
      console.error('Error fetching BNB price:', error);
    }
  };

  // Fetch the BNB price every 10 seconds
  useEffect(() => {
    fetchBNBPrice(); // Initial fetch
    const interval = setInterval(() => {
      fetchBNBPrice();
    }, 10000); // 10 seconds interval

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bnb-price">
      {price ? <h2>BNB Price: ${parseFloat(price).toFixed(2)}</h2> : <p>Loading BNB price...</p>}
    </div>
  );
};

export default BNBPrice;
