import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Booking.css"
import standardRoomImage from "../../assets/singaporecartoon.png";
import deluxeRoomImage from "../../assets/cuba.png";
import suiteImage from "../../assets/paris.png";
import bookingImage from "../../assets/circle.png";
import { useNavigate } from "react-router-dom";

const sampleCards = [
  {
    title: "Singapore",
    description: "In Singapore, a vibrant fusion of cultures creates a tapestry of flavors, traditions, and innovation.",
    price: "Cultures Collide, Innovation Thrives",
    image: standardRoomImage,
    url: "singapore"
  },
  {
    title: "India",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150 per night",
    image: deluxeRoomImage,
    url: "india"
  },
  {
    title: "Europe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$200 per night",
    image: suiteImage,
    url: "europe"
  },
];

const Carousel = ({ cards }) => {
  const navigate=useNavigate();
 
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 
    return () => clearInterval(interval);
  }, [cards]);

  return (
    <div id="booking" className="card-container">
      {cards.map((card, index) => (
        <div className={`card ${index === currentCardIndex ? 'active' : ''}`} key={index}>
          <img className="card-image" src={card.image} alt={card.title} />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
          <p className="price">{card.price}</p>
          <button className="book-button" onClick={()=>{navigate(`/${card.url}`)}}>Know More</button>
        </div>
      ))}
    </div>
  );
};

const Booking = () => {
  return (
    <div className="booking-section">
      <div className="block2">
      <p className="text-on-block">"Traveling is the art of painting your soul with the colors of the world's landscapes, sculpting memories that last a lifetime, and weaving stories into the fabric of your existence."</p>
      </div>
      <img className="booking-image" src={bookingImage} alt="Booking" />
      <h2 className="booking-title">Book Your Stay</h2>
      <Carousel cards={sampleCards} />
    </div>
  );
};

export default Booking;
