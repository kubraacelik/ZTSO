import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "../styles/Classifieds.css";
import classifiedsImg from "../assets/classification.png";

function Classifieds() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance === null) {
      const swiper = new Swiper(".classification-swiper", {
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
    <>
      <div className="classification-container">
        <div className="classification-wrapper">
          <div className="classification-top">
            <div className="classification-img">
              <img src={classifiedsImg} alt="" />
            </div>
            <div className="classification-title">
              <p>İLANLAR</p>
            </div>
          </div>
          <div className="classification-end">
            <div className="swiper-container classification-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="classification-list-element-title">
                    ZONGULDAK ÇAYCUMA TARIMA DAYALI İHTİSAS ( SERA ) ORGANİZE
                    SANAYİ BÖLGESİ YÖNETİM KURULU BAŞKANLIĞI İLANI
                  </div>
                  <div className="classification-list-element-desc">
                    Zonguldak Çaycuma Tartma Dayah ihtisas (Sera) Organize
                    Sanayi Bölgesinde bulunan 3 (üç) adet sera parseli talepte
                    bulunan firmalara tahsis edilecek olup ekte sunulan ilan
                    metninin en az 15 gün süre ile internet sitenizde ve ilan
                    panonuzda duyurularının yapılarak ilan edildiğine ilişkin
                    tutanakların TDİOSB Müdürlüğümüze gönderilmesi hususunda;
                  </div>
                  <div className="classification-list-element-date">
                    28.02.2023
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="classification-list-element-title">
                    KİŞİSEL KORUYUCU DONANIM MALZEMESİ TEMİNİ İHALE EDİLECEKTİR
                  </div>
                  <div className="classification-list-element-desc">
                    Türkiye Taşkömürü Kurumu Genel Müdürlüğünden: Kişisel
                    Koruyucu Donanım Malzemesi Temini 4734 sayılı Kamu İhale
                    Kanunu’nun 3. maddesinin (g) bendi kapsamında Türkiye
                    Taşkömürü Kurumu Genel Müdürlüğü Mal, Hizmet Alımları ve
                    Yapım İşleri ile İlgili Yönetmelik’in 17. maddesine göre
                    “Açık İhale Usulü” ihale edilecektir.
                  </div>
                  <div className="classification-list-element-date">
                    08.06.2022
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="classification-list-element-title">
                    T.C. POSTA VE TELGRAF TEŞKİLATI ANONİM ŞİRKETİ SAKARYA PTT
                    BAŞMÜDÜRLÜĞÜ
                  </div>
                  <div className="classification-list-element-desc">
                    Zonguldak Posta Paket Binasının Kiraya Verme İhalesi
                  </div>
                  <div className="classification-list-element-date">
                    21.12.2021
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="classification-list-element-title">
                    ET VE SÜT KURUMU GENEL MÜDÜRLÜĞÜ SİNCAN ET KOMBİNASI
                    MÜDÜRLÜĞÜ
                  </div>
                  <div className="classification-list-element-desc">
                    Et ve Süt Kurumu'na bağlı Sincan,Adana, Ağrı, Bingöl,
                    Denizli, Diyarbakrr,Erzurum, Sivas Van ve Yogat Et
                    Kombinalan'nda 2021 Mayıs-Haziran-Temmuz-Ağustos aylarında
                    yapılması muhtemel olan büyükbaş hayvan kesimlerinden
                    üretilecek derilerin (kelle derisi dahil), büyükbaş hayvan
                    sakatatları (işkembe hariç); küçükbaş hayvan derisi ,
                    küçükbaş hayvan bağırsak ile küçükbaş hayvan sakatatları
                    online satış usulü ile satılacaktır.
                  </div>
                  <div className="classification-list-element-date">
                    22.03.2021
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="classification-container-end">
            <div className="classification-buttons">
              <button className="prev" onClick={handlePrevClick}>
                &lt;
              </button>
              <button className="next" onClick={handleNextClick}>
                &gt;
              </button>
            </div>
            <div className="all-classification">
              {" "}
              <button>
                <a href="#">Tüm İlanlar</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Classifieds;
