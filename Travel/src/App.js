import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import Destination from "./components/Destination/Destination";
import CarouSel from "./components/Testimonials/CarouselItem";
import "../src/App.css"

export default function App() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  }

  return (
    <div>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Booking id="booking" />
      <Destination id="testimonials" />
      <CarouSel />
      <Contact id="contact" />
      
      <Footer />
      <div className="chatbot-window">
  {showChat && <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/7618e208-71b2-40dc-8fb1-d8a76d3de3b9"></iframe>}
</div>
<button onClick={toggleChat} className="chat-button">
  {showChat ? 'Hide Chat' : 'Show Chat'}
</button>
    </div>
  );
}
