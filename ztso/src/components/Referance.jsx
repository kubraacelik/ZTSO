import "../styles/Referance.css";
import Referans1 from "../assets/tobb.png";
import Referans2 from "../assets/bakka.png";
import Referans3 from "../assets/işkur.png";
import Referans4 from "../assets/kgf.png";
import Referans5 from "../assets/kosgeb.png";
import Referans6 from "../assets/rekabetkurum.png";

function Referance() {

  return (
    <div className="referance-wrapper">
      <div className="referance-container">
        <div className="referance-list">
          <div className="referance-item">
            <a
              href="https://www.tobb.org.tr/Sayfalar/AnaSayfa.php"
              target="_blank"
            >
              <img src={Referans1} alt="" />
            </a>
          </div>
          <div className="referance-item">
            <a href="https://www.bakka.gov.tr/" target="_blank">
              <img src={Referans2} alt="" />
            </a>
          </div>
          <div className="referance-item">
            <a href="https://www.iskur.gov.tr/" target="_blank">
              <img src={Referans3} alt="" />
            </a>
          </div>
          <div className="referance-item">
            <a href="https://www.kgf.com.tr/index.php/tr/" target="_blank">
              <img src={Referans4} alt="" />
            </a>
          </div>
          <div className="referance-item">
            <a href="https://www.kosgeb.gov.tr/" target="_blank">
              <img src={Referans5} alt="" />
            </a>
          </div>
          <div className="referance-item">
            <a
              href="https://www.rekabet.gov.tr/dosyalar/Kararlar/karar2750.pdf?page=663&page=663"
              target="_blank"
            >
              <img src={Referans6} alt="" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Referance;
