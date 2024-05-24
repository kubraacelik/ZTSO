import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "../styles/Tenders.css";
import tendersImg from "../assets/tenders.png";

function Tenders() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance === null) {
      const swiper = new Swiper(".tenders-swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
      setSwiperInstance(swiper);
    }
  }, [swiperInstance]);
  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };
  return (
    <div className="tenders-container">
      <div className="tenders-wrapper">
        <div className="tenders-top">
          <div className="tenders-img">
            <img src={tendersImg} alt="" />
          </div>
          <div className="tenders-title">
            <p>İHALELER</p>
          </div>
        </div>
        <div className="tenders-end">
          <div className="swiper-container tenders-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  TAŞIT TANIMA SİSTEMİ İLE AKARYAKIT ALIM İŞİ İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : Türkiye Taşkömürü Kurumu Genel
                  Müdürlüğü Satınalma Dairesi Başkanlığı
                </div>
                <div className="tenders-list-element-date">09.05.2022</div>
              </div>

              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  ÇZK YEDEKLERİ ALIMI İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : TTK Satınalma Dairesi Başkanlığı
                  Teklif Alma Birimi
                </div>
                <div className="tenders-list-element-date">10.01.2022</div>
              </div>

              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  LAZERLİ KAPLİN AYAR CİHAZI ALIMI İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : TTK Makine ve İkmal Dairesi
                  Başkanlığı Muayene ve Tesellüm İşleri Şube Müdürlüğü Tesellüm
                  Şefliği Ambarı /ZONGULDAK
                </div>
                <div className="tenders-list-element-date">18.11.2021</div>
              </div>

              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  ELEKTRİKLİ EL ALETLERİ ALIMI İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : TTK Makina ve İkmal Dairesi
                  Başkanlığı Muayene ve Tesellüm İşleri Şube Müdürlüğü Tesellüm
                  Şefliği ambarı
                </div>
                <div className="tenders-list-element-date">17.11.2021</div>
              </div>
              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  BASINÇLI HAVALI TESTERE ALIMI İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : TTK Satınalma Daire Başkanlığı
                  ZONGULDAK
                </div>
                <div className="tenders-list-element-date">21.04.2021</div>
              </div>

              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  HİDROLİK HORTUM ALIMI İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : Türkiye Taşkömürü Kurumu Genel
                  Müdürlüğü Satınalma Dairesi Başkanlığı Bülent Ecevit Caddesi
                  No:125 ZONGULDAK
                </div>
                <div className="tenders-list-element-date">17.11.2021</div>
              </div>

              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  NORMAL VE EMPRENYELİ KALKER TAŞTOZU ALIMI İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : Türkiye Taşkömürü Kurumu Genel
                  Müdürlüğü Satınalma Dairesi Başkanlığı
                </div>
                <div className="tenders-list-element-date">17.11.2021</div>
              </div>

              <div className="swiper-slide">
                <div className="tenders-list-element-title">
                  GEMİ ADAMLARI KIYAFETİ ALIMI İHALE EDİLECEKTİR
                </div>
                <div className="tenders-list-element-desc">
                  İlgili Birim / Müdürlük : TTK Satınalma Dairesi Başkanlığı
                </div>
                <div className="tenders-list-element-date">17.11.2021</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tenders-container-end">
          <div className="tenders-buttons">
            <button className="prev" onClick={handlePrevClick}>
              &lt;
            </button>
            <button className="next" onClick={handleNextClick}>
              &gt;
            </button>
          </div>
          <div className="all-tenders">
            {" "}
            <button>
              <a href="#">Tüm İhaleler</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tenders;
