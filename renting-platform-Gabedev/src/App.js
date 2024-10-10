import React from 'react';
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing

import AboutUs from "./pages/AboutUs"; // AboutUs page component
import NavBar from "./components/navbar/Navbar"; // Navbar component
import Developers from "./pages/Developers"; // Developers page component
import Footer from "./pages/Footer"; // Footer component
import Join from "./pages/Join"; // Join page component
import Loading from "./pages/Header"; // Header/Loading component
import Partners from "./pages/Partners"; // Partners page component
import Properties from "./pages/Properties"; // Properties page component for property listings
import Subscribe from "./pages/Subscribe"; // Subscribe page component

import BNBPriceDisplay from './BNBPriceDisplay'; // Import the BNB price display component

// App component definition
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />          {/* Navigation bar */}
        <Loading />         {/* Loading/Header component */}
        <BNBPriceDisplay /> {/* Display BNB price at the top */}
        <Partners />        {/* Partners section */}
        <Properties />      {/* Property cards section */}
        <AboutUs />         {/* About Us section */}
        <Developers />      {/* Developers section */}
        <Join />            {/* Join section */}
        <Subscribe />       {/* Subscribe section */}
        <Footer />          {/* Footer section */}
      </BrowserRouter>
    </>
  );
};

export default App;
