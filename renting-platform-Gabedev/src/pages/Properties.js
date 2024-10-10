// Properties.js
import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// Secure shuffle function to randomize cards
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

// Properties component to display shuffled cards
const Properties = () => {
  const [shuffledCards, setShuffledCards] = useState([]); // State for shuffled cards
  const [loading, setLoading] = useState(true); // Loading state for cards
  const [error, setError] = useState(null); // Error state for cards

  // Sample card data (this can be fetched from an API instead of hardcoded)
  const cardData = [
    { id: 1, name: 'Cottage «Forrest 1»', price: '29.71 ETH', image: 'forest.webp' },
    { id: 2, name: 'Freshness', price: '14.81 ETH', image: 'freshness.webp' },
    { id: 3, name: 'Wish house', price: '16.62 ETH', image: 'wishhouse.webp' },
    { id: 4, name: 'Spruce', price: '17.01 ETH', image: 'spruce.webp' },
    { id: 5, name: 'Blue Sky', price: '17.31 ETH', image: 'bluesky.webp' },
    { id: 6, name: 'Sunset Villa', price: '19.11 ETH', image: 'sunsetvilla.webp' }
  ];

  // Shuffle cards and set them in state on component mount
  useEffect(() => {
    try {
      const shuffled = shuffleArray([...cardData]).slice(0, 5); // Shuffle and select first 5 cards
      setShuffledCards(shuffled);
      setLoading(false);
    } catch (err) {
      setError('Error shuffling cards');
      setLoading(false);
    }
  }, []);

  // Handle loading or error states
  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="properties">
      <Container>
        <motion.div initial={{ x: -80 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }}>
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 1198: { slidesPerView: 5 } }}
            navigation={true}
            className="mySwiper mt-4"
          >
            {shuffledCards.map((card) => (
              <SwiperSlide key={card.id}>
                <Card className="bg-black-100 rounded">
                  <Card.Body>
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img variant="top" alt={card.name} src={require(`../images/properties/${card.image}`)} />
                    </div>
                    <h5 className="mt-2 text-white fw-normal">{card.name}</h5>
                    <h6 className="text-white">{card.price}</h6>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </div>
  );
};

export default Properties;
