import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BNBPriceDisplay = () => {
  const [bnbPrice, setBnbPrice] = useState(null);

  // Fetch BNB price from Binance API every 10 seconds
  useEffect(() => {
    const fetchBNBPrice = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
        setBnbPrice(response.data.price);
      } catch (error) {
        console.error('Error fetching BNB price:', error);
      }
    };

    // Fetch the price initially and then every 10 seconds
    fetchBNBPrice();
    const intervalId = setInterval(fetchBNBPrice, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>BNB Price: {bnbPrice ? `$${bnbPrice}` : 'Loading...'}</h2>
    </div>
  );
};

export default BNBPriceDisplay;
