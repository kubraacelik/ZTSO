import { useState } from 'react';
import "../styles/Slider.css";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.jpg";
import Slider3 from "../assets/slider3.jpg";
import Slider4 from "../assets/slider4.jpg";
import Slider5 from "../assets/slider5.jpg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const slides = [Slider1, Slider2, Slider3, Slider4, Slider5];

  return (
    <>
      <div className="slider">
        <div className="list">
          {slides.map((slide, index) => (
            <div key={index} className={index === currentSlide ? "item active" : "item"}>
             <div className='slide-img'>
             <img src={slide} alt="" />
             </div>
              <div className="content">
                <p>Design</p>
                <h2>Slider {index + 1}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  sapiente, assumenda autem magnam ipsam laboriosam!
                </p>
              </div>
            </div>
          ))}
          {/* buttons */}
          <div className="arrows">
            <button id="prev" onClick={prevSlide}>&lt;</button>
            <button id="next" onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
