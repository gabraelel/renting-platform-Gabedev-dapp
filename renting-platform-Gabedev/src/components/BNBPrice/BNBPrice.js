// BNBPriceDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For API requests (fetching BNB price)

const BNBPriceDisplay = () => {
  const [bnbPrice, setBnbPrice] = useState(null); // State for BNB price

  // Fetch BNB price from Binance API every 10 seconds
  useEffect(() => {
    const fetchBNBPrice = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
        setBnbPrice(response.data.price); // Set the fetched price
      } catch (error) {
        console.error('Error fetching BNB price:', error);
      }
    };

    fetchBNBPrice(); // Fetch the BNB price initially
    const intervalId = setInterval(fetchBNBPrice, 10000); // Fetch BNB price every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="bnb-price">
      <h2>BNB Price: {bnbPrice ? `$${bnbPrice}` : 'Loading...'}</h2>
    </div>
  );
};

export default BNBPriceDisplay;
