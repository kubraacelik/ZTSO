import "../styles/Slider.css";
import { useState } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  return (
    <>
      <div className="slider">
        <div className={currentSlide === 0 ? "slide active" : "slide"}></div>
        <div className="inner">
          <h1>Slide Başlığı 1</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            repellendus eveniet, maiores voluptatem exercitationem distinctio
            excepturi velit! Quaerat, alias quasi?
          </p>
        </div>
        <div className={currentSlide === 1 ? "slide active" : "slide"}>
          <div className="inner">
            <h1>Slide Başlığı 2</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              repellendus eveniet, maiores voluptatem exercitationem distinctio
              excepturi velit! Quaerat, alias quasi?
            </p>
          </div>
        </div>
        <div className={currentSlide === 2 ? "slide active" : "slide"}>
          <div className="inner">
            <h1>Slide Başlığı 3</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              repellendus eveniet, maiores voluptatem exercitationem distinctio
              excepturi velit! Quaerat, alias quasi?
            </p>
          </div>
        </div>
        <div className={currentSlide === 3 ? "slide active" : "slide"}>
          <div className="inner">
            <h1>Slide Başlığı 4</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              repellendus eveniet, maiores voluptatem exercitationem distinctio
              excepturi velit! Quaerat, alias quasi?
            </p>
          </div>
        </div>
        <div className={currentSlide === 4 ? "slide active" : "slide"}>
          <div className="inner">
            <h1>Slide Başlığı 5</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              repellendus eveniet, maiores voluptatem exercitationem distinctio
              excepturi velit! Quaerat, alias quasi?
            </p>
          </div>
        </div>
      </div>
      <div className="indicators">
        <button id="prev" onClick={prevSlide}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button id="next" onClick={nextSlide}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
