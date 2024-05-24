import "../styles/PresidentSection.css";
import President from "../assets/metin-demir.jpg";

function PresidentSection() {
  return (
    <div className="president-wrapper">
        <div className="president-section">
          <div className="president-img">
            <img src={President} alt="Metin Demir" />
          </div>
          <div className="president-info">
            <p className="president-name">METİN DEMİR</p>
            <p>ZONGULDAK TSO YÖNETİM</p>
            <p> KURULU BAŞKANI</p>
          </div>
        </div>
      </div>
  );
}

export default PresidentSection;
