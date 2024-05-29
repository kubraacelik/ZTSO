import logo from "../assets/zonguldak-logo.png";
import "../styles/Navbar.css";
import { FaFacebook, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import  Header2Logo  from "../assets/headerlogo2.png";
import  CClogo  from "../assets/CCIOT.png";

function Navbar() {
  return (
    <div className="containerDiv">
      <div className="header1 sticky">
        <div className="header1-start">
          <div className="top-menu">
            <div className="top-menu-item">
              <a href="#">Bölgemiz Hakkında</a>
              <span className="divider">|</span>
            </div>
            <div className="top-menu-item">
              <a href="#">Aidat Borcu Sorgulama</a>
              <span className="divider">|</span>
            </div>
            <div className="top-menu-item">
              <a href="#">Online İşlemler</a>
              <span className="divider">|</span>
            </div>
            <div className="top-menu-item">
              <a href="#">Üye Memnuniyet Anketi</a>
              <span className="divider">|</span>
            </div>
            <div className="top-menu-item">
              <a href="#">Kurumsal E-Posta</a>
            </div>
          </div>
          <div className="social-media">
            <div className="social-media-list">
              <a href="https://www.facebook.com/ztsokurumsal/" target="_blank">
                <FaFacebook className="social-media-icon" />
              </a>
            </div>
            <div className="social-media-list">
              <a href="https://twitter.com/ZonguldakTSO" target="_blank">
                <FaXTwitter className="social-media-icon" />
              </a>
            </div>
            <div className="social-media-list">
              <a
                href="https://www.instagram.com/ztsokurumsal/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
              >
                <FaInstagram className="social-media-icon" />
              </a>
            </div>
            <div className="social-media-list">
              <a
                href="https://www.youtube.com/channel/UCfRfP2XzGNdOhYkU2TW6yyQ"
                target="_blank"
              >
                <FaYoutubeSquare className="social-media-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="header1-end">
          <div className="search-main">
            <input type="text" className="tbox-search" />
            <a className="btn-search">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="header2 sticky">
        <div className="logoContainer">
          <img src={logo} alt="Resim Bulunamadı" />
        </div>
        <div className="navs">
          <div className="navs-item">
            <a href="#">KURUMSAL</a>
          </div>
          <div className="navs-item">
            <a href="#">HİZMETLERİMİZ</a>
          </div>
          <div className="navs-item">
            <a href="#">MESLEK KOMİTELERİ</a>
          </div>
          <div className="navs-item">
            <a href="#">PROJELER</a>
          </div>
          <div className="navs-item">
            <a href="#">BİLGİ MERKEZİ</a>
          </div>
          <div className="navs-item">
            <a href="#">BİLGİ EDİNME</a>
          </div>
          <div className="navs-item">
            <a href="#">BİZE ULAŞIN</a>
          </div>
        </div>
        <div className="header2-end">
          <a href="https://ztso.org.tr/icerik/informationen-fur-b2b-aktivitaten-b2b-etkinligi-icin-bilgiler">
            <img src={Header2Logo} alt="" />
          </a>
          <a href="https://cciot-edu.eu/tr/">
            <img src={CClogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
