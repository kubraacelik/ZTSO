import "../styles/Slider.css";

function Slider() {
  return (
    <>
      <div className="slider">
        <div className="slide active"></div>
        <div className="inner">
          <h1>Slide Başlığı 1</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            repellendus eveniet, maiores voluptatem exercitationem distinctio
            excepturi velit! Quaerat, alias quasi?
          </p>
        </div>
        <div className="slide"></div>
        <div className="inner">
          <h1>Slide Başlığı 2</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            repellendus eveniet, maiores voluptatem exercitationem distinctio
            excepturi velit! Quaerat, alias quasi?
          </p>
        </div>
        <div className="slide"></div>
        <div className="inner">
          <h1>Slide Başlığı 3</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            repellendus eveniet, maiores voluptatem exercitationem distinctio
            excepturi velit! Quaerat, alias quasi?
          </p>
        </div>
        <div className="slide"></div>
        <div className="inner">
          <h1>Slide Başlığı 4</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            repellendus eveniet, maiores voluptatem exercitationem distinctio
            excepturi velit! Quaerat, alias quasi?
          </p>
        </div>
        <div className="slide"></div>
        <div className="inner">
          <h1>Slide Başlığı 5</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            repellendus eveniet, maiores voluptatem exercitationem distinctio
            excepturi velit! Quaerat, alias quasi?
          </p>
        </div>
      </div>
      <div className="indicators">
        <button id="prev">
          <i className="fas fa-angle-left"></i>
        </button>
        <button id="next">
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
