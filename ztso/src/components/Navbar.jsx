import logo from "../assets/zonguldak-logo.png";
import "../styles/Navbar.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="containerDiv">
      <div className="container">
        <div className="header1">
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
              <FaFacebook />
            </div>
            <div className="social-media-list">
              <FaXTwitter />
            </div>
            <div className="social-media-list">
              <FaInstagram />
            </div>
            <div className="social-media-list">
              <FaYoutube />
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
        <div className="header2">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
