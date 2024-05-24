import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "../styles/Announcements.css";
import announcementsImg from "../assets/announcements.png";

function Announcements() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance === null) {
      const swiper = new Swiper(".announcements-swiper", {
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
    <div className="announcements-container">
        <div className="announcements-wrapper">
          <div className="announcements-top">
            <div className="announcements-img">
              <img src={announcementsImg} alt="" />
            </div>
            <div className="announcements-title">
              <p>DUYURULAR</p>
            </div>
          </div>
          <div className="announcements-end">
            <div className="swiper-container announcements-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    Girişimcilik Destekleri Güncellendi
                  </div>
                  <div className="announcements-list-element-desc">
                    Girişimcilik Destek Programları’nda düzenleme yapıldı.
                    Düzenlemeye ilişkin detayları Sanayi ve Teknoloji Bakanı
                    Mehmet Fatih Kacır paylaştı.
                  </div>
                  <div className="announcements-list-element-date">
                    14.05.2024
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    Girişimcilik Destek Programları'nda Düzenleme Yapıldı.
                  </div>
                  <div className="announcements-list-element-desc">
                    Girişimcilik Destek Programları'nda düzenleme yapıldı.
                    Stratejik hedefleriyle uyumlu sektörlerde katma değer ve
                    nitelikli istihdam oluşturma potansiyeline sahip
                    girişimlerimize 2 milyon TL'ye kadar finansman imkân
                    sunulacak.
                  </div>
                  <div className="announcements-list-element-date">
                    14.05.2024
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    Uluslararası Sağlık Turizmi Bölge Toplantısı hak.
                  </div>
                  <div className="announcements-list-element-desc">
                    Karadeniz Bölgesi özelinde sağlık turizminin
                    değerlendirilmesine yönelik, Karadeniz Bölge Odalarının
                    katılımı Samsun Ticaret ve Sanayi Odası ev sahipliğinde
                  </div>
                  <div className="announcements-list-element-date">
                    17.04.2024
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    Tepav Ekonomiye Dair Öne Çıkan Düzenlemeler 7 – 13 Mart 2024
                  </div>
                  <div className="announcements-list-element-desc">
                    Türkiye Cumhuriyet Merkez Bankası’nın (TCMB) sıkı para
                    politikası duruşunu destekleyici ilave sıkılaşma adımları
                    kapsamında, kredi büyümesine dayalı zorunlu karşılık tesis
                    edilecek.
                  </div>
                  <div className="announcements-list-element-date">
                    15.03.2024
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    Sanayi Sicil Bilgi Sistemi - Bilgilendirme
                  </div>
                  <div className="announcements-list-element-desc">
                    Yıllık İşletme Cetveli İçin Son Tarih: 30 Nisan 2024 6948
                    sayılı Sanayi Sicil Kanunu’nun 5. maddesi gereğince, sanayi
                    işletmeleri, her takvim yılı başından itibaren 4 ay
                    içerisinde bir önceki yıla ait bilgileri içeren "Yıllık
                    İşletme Cetvelini"
                  </div>
                  <div className="announcements-list-element-date">
                    11.03.2024
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    Tepav Ekonomiye Dair Öne Çıkan Düzenlemeler 22 – 28 Şubat
                    2024
                  </div>
                  <div className="announcements-list-element-desc">
                    Yeni TCMB Başkanıyla ilk karar Yeni Başkan Fatih Karahan
                    başkanlığında toplanan Türkiye Cumhuriyet Merkez Bankası
                    (TCMB) Para Politikası Kurulu, bir haftalık repo faizini
                    sabit tutarken Enflasyon Raporu sunumunda verilen “enflasyon
                    görünümünde bozulma öngörülmesi durumunda para politikası
                    duruşunun sıkılaştırılacağı” mesajını yineledi.
                  </div>
                  <div className="announcements-list-element-date">
                    06.03.2024
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    Tepav Ekonomiye Dair Öne Çıkan Düzenlemeler 15 – 21 Şubat
                    2024
                  </div>
                  <div className="announcements-list-element-desc">
                    Demiryolu taşımacılık faaliyetlerini düzenleyen yönetmelik
                    yenilendi Demiryolu taşımacılık faaliyetlerinin
                    düzenlenebilmesi için demiryolu altyapı ve demiryolu tren
                    işletmecileri ile acente, gar veya istasyon işletmecisi
                    faaliyetlerinde bulunanlara ilişkin esasları düzenleyen
                    yönetmelik yenilendi.
                  </div>
                  <div className="announcements-list-element-date">
                    22.02.2024
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="announcements-list-element-title">
                    ZONGULDAK - GÖKÇEBEY ORGANİZE SANAYİ BÖLGESİ YÖNETİM KURULU
                    BAŞKANLIĞINDAN DUYURU
                  </div>
                  <div className="announcements-list-element-desc">
                    Zonguldak Gökçebey Organize Sanayi Bölgesinde bulunan en
                    küçüğü 3000 m2 en büyüğü 30000 m240 adet sanayi parselinin,
                  </div>
                  <div className="announcements-list-element-date">
                    09.02.2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="announcements-container-end">
            <div className="announcements-buttons">
              <button className="prev" onClick={handlePrevClick}>
                &lt;
              </button>
              <button className="next" onClick={handleNextClick}>
                &gt;
              </button>
            </div>
            <div className="all-announcements">
              <button>
                <a href="#">Tüm Duyurular</a>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Announcements;