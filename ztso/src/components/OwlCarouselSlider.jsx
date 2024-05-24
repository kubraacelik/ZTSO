import "../styles/OwlCarouselSlider.css";
import { useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { SlEvent } from "react-icons/sl";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiSurveyLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { IoEarthOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GrWorkshop } from "react-icons/gr";
import { RiBaseStationLine } from "react-icons/ri";
import { CiSquareQuestion } from "react-icons/ci";

function OwlCarouselSlider() {
  useEffect(() => {
    $(".owlCarousel-container").owlCarousel({
      items: 7,
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<", ">"],
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 6,
          nav: false,
        },
        1000: {
          items: 7,
          nav: false,
        },
      },
    });
  }, []);

  return (
      <div className="owlCarousel-wrapper">
        <div className="owlCarousel-container owl-carousel">
          <div className="owlCarousel-card card-1">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <FaRegNewspaper />
              </div>
              <div className="owlCarousel-desc">
                <p>HABERLER</p>
              </div>
              <div className="owlCarousel-link">
                <a
                  href="https://www.ztso.org.tr/haber-kategori/odamizdan-haberler"
                  target=" _blank"
                >
                  Güncel Haberleri Görmek İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-2">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <SlEvent />
              </div>
              <div className="owlCarousel-desc">
                <p>ETKİNLİKLER</p>
              </div>
              <div className="owlCarousel-link">
                <a href="https://www.ztso.org.tr/etkinlikler" target=" _blank">
                  Etkinlik Takvimine Göz Atmak İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-3">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <TfiAnnouncement />
              </div>
              <div className="owlCarousel-desc">
                <p>DUYURULAR</p>
              </div>
              <div className="owlCarousel-link">
                <a href="https://www.ztso.org.tr/duyurular" target=" _blank">
                  Güncel Duyurular İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-4">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <RiSurveyLine />
              </div>
              <div className="owlCarousel-desc">
                <p>ANKETLER</p>
              </div>
              <div className="owlCarousel-link">
                <a
                  href="https://www.onlineanketler.com/s/uyeztso"
                  target=" _blank"
                >
                  Üye Memnuniyet Anketi İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-5">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <GiReceiveMoney />
              </div>
              <div className="owlCarousel-desc">
                <p>E-AİDAT</p>
              </div>
              <div className="owlCarousel-link">
                <a
                  href="https://uye.tobb.org.tr/hizliaidatodeme.jsp"
                  target=" _blank"
                >
                  Hızlı Aidat Ödemek İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-6">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <IoEarthOutline />
              </div>
              <div className="owlCarousel-desc">
                <p>E-BELGE</p>
              </div>
              <div className="owlCarousel-link">
                <a
                  href="https://uye.tobb.org.tr/organizasyon/firma-index.jsp"
                  target=" _blank"
                >
                  7/24 Online Belge İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-7">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <HiOutlineDocumentReport />
              </div>
              <div className="owlCarousel-desc">
                <p>RAPORLAR</p>
              </div>
              <div className="owlCarousel-link">
                <a
                  href="https://www.ztso.org.tr/proje-kategori/raporlar"
                  target=" _blank"
                >
                  Raporları İncelemek İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-8">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <GrWorkshop />
              </div>
              <div className="owlCarousel-desc">
                <p>PROJELER</p>
              </div>
              <div className="owlCarousel-link">
                <a
                  href="https://www.ztso.org.tr/proje-kategori/projelerimiz"
                  target=" _blank"
                >
                  Projeleri İncelemek İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-9">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <RiBaseStationLine />
              </div>
              <div className="owlCarousel-desc">
                <p>ONLINE İŞLEMLER</p>
              </div>
              <div className="owlCarousel-link">
                <a href="https://www.ztso.org.tr/-" target=" _blank">
                  Online İşlemler İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="owlCarousel-card card-10">
            <div className="owlCarousel-content">
              <div className="owlCarousel-icon">
                <CiSquareQuestion />
              </div>
              <div className="owlCarousel-desc">
                <p>ÖNERİ/ŞİKAYET</p>
              </div>
              <div className="owlCarousel-link">
                <a
                  href="https://ztso.org.tr/istekonerisikayet/index.php"
                  target=" _blank"
                >
                  İstek/Öneri/Şikayet Bildirmek İçin Tıklayınız
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default OwlCarouselSlider;
