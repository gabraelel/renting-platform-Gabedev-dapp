
import React, { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import CountDown from '../components/functions/CountDown';
import { motion } from 'framer-motion';
import AnimationTitles from '../components/functions/AnimationTitles';
import BNBPrice from '../components/BNBPrice/BNBPrice';
import './Properties.css'; // Optional: If you have specific styles

function Properties() {
  // State to hold properties
  const [properties, setProperties] = useState([]);

  // useEffect to fetch and shuffle properties when the component mounts
  useEffect(() => {
    const fetchedProperties = [
      {
        id: 1,
        name: 'Cottage «Forrest 1»',
        img: require('../images/properties/picture-of-a-wooden-building-in-the-forest.webp'),
        price: '29.71 ETH',
        countdown: { h: 9, m: 45, s: 8 },
      },
      {
        id: 2,
        name: 'Freshness',
        img: require('../images/properties/pexels-stan-krotov-12737424 1.webp'),
        price: '14.81 ETH',
        countdown: { h: 29, m: 15, s: 10 },
      },
      {
        id: 3,
        name: 'Wish House',
        img: require('../images/properties/pexels-rachel-claire-8112843 1.webp'),
        price: '16.62 ETH',
        countdown: { h: 23, m: 6, s: 1 },
      },
      {
        id: 4,
        name: 'Spruce',
        img: require('../images/properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp'),
        price: '17.01 ETH',
        countdown: { h: 10, m: 30, s: 58 },
      },
      {
        id: 5,
        name: 'Blue Sky',
        img: require('../images/properties/house_big.webp'),
        price: '17.31 ETH',
        countdown: { h: 23, m: 16, s: 11 },
      },
      // Add more properties as needed
    ];

    // Shuffle the properties array
    const shuffledProperties = fetchedProperties.sort(() => Math.random() - 0.5);
    
    // Set the shuffled properties to the state
    setProperties(shuffledProperties);
  }, []);

  // Placeholder function for like button
  const like = () => {
    // Implement like functionality
    console.log('Property liked!');
  };

  // Placeholder function for active tab
  const active = () => {
    // Implement active tab functionality
    console.log('Active tab clicked!');
  };

  return (
    <div className="properties">
      <Container>
        {/* Display the BNB price at the top */}
        <BNBPrice />

        {/* Animated Title */}
        <AnimationTitles className="title mx-auto" title="Discover More Properties" />

        {/* Start Tabs */}
        <div className="tabs d-flex justify-content-start justify-content-sm-center align-items-center flex-nowrap w-lg-50">
          <Swiper
            className="mySwiper overflow-none"
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                All
              </Button>
            </SwiperSlide>
            {/* Add more tabs as needed */}
            <SwiperSlide>
              <Button className="bg-black-100 border-0">Luxury</Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="bg-black-100 border-0">Modern</Button>
            </SwiperSlide>
            {/* ... */}
          </Swiper>
        </div>
        {/* End Tabs */}

        {/* Start Property Cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              520: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1198: { slidesPerView: 5 },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img variant="top" alt={property.name} src={property.img} />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">{property.name}</h5>
                    <p className="gray-90">@Real Estate Agency</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown
                          h={property.countdown.h}
                          m={property.countdown.m}
                          s={property.countdown.s}
                        />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">{property.price}</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* End Property Cards */}
      </Container>
    </div>
  );
}

export default Properties;
