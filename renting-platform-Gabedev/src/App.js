import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Subscribe from "./pages/Subscribe";
import React from 'react';
import BNBPriceDisplay from './BNBPriceDisplay'; // Import the BNB price display component
import Properties from './Properties'; // Import the shuffled properties component

const App = () => {
  return (
    <div>
      {/* Display BNB price at the top */}
      <BNBPriceDisplay />
      {/* Display shuffled property cards */}
      <Properties />
    </div>
  );
};

export default App;


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Loading />
        <Partners />
        <Properties />
        <AboutUs />
        <Developers />
        <Join />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
