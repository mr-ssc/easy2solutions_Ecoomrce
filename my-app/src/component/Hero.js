import React, { useState, useEffect } from "react";
import "./Hero.css";

// Import local images
import slide1 from "../component/Img/slide-1.png";
import slide2 from "../component/Img/slide-2.jpg";
import slide3 from "../component/Img/slide-3.jpg";

const Hero = () => {
  // Define the images array directly in the component
  const images = [slide1, slide2, slide3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="hero">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Hero;