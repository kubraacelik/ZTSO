import "../styles/SlideMenu.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import trLocale from "@fullcalendar/core/locales/tr";
import "../styles/Events.css";
import planner from "../assets/calendar.png";

function SlideMenu() {
  return (
    <div className="container">
      <div className="events-container">
        <div className="planner">
          <img src={planner} alt="" />
          <p>Etkinlikler</p>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today",
            center: "title",
            end: "prev,next",
          }}
          height="60vh"
          locale={trLocale}
        />
      </div>
      <div className="slideMenuContainer">
        <div className="slideMenu">
          <div className="slideMenu-list">
            <button className="slideMenu-item">
              <a
                target="_blank"
                href="https://tobb.org.tr/Sayfalar/20200421-webinar.php"
              >
                TOBB WEBİNAR
              </a>
            </button>
          </div>
          <div className="slideMenu-list">
            <button className="slideMenu-item">
              <a target="_blank" href="https://www.tobb2b.org.tr/ihale.php">
                TOBB İHALELERİ
              </a>
            </button>
          </div>
          <div className="slideMenu-list">
            <button className="slideMenu-item">
              <a
                target="_blank"
                href="https://www.ztso.org.tr/uploads/files/2022fuartakvimi.xls"
              >
                TOBB FUARLAR
              </a>
            </button>
          </div>
          <div className="slideMenu-list">
            <button className="slideMenu-item">
              <a
                target="_blank"
                href="https://www.ticaret.gov.tr/yurtdisi-teskilati"
              >
                ÜLKE RAPORLARI
              </a>
            </button>
          </div>
          <div className="slideMenu-list">
            <button className="slideMenu-item">
              <a
                target="_blank"
                href="https://uye.tobb.org.tr/organizasyon/firma-index.jsp"
              >
                7/24 E-BELGE
              </a>
            </button>
          </div>
          <div className="slideMenu-list">
            <button className="slideMenu-item">
              <a
                target="_blank"
                href="https://www.ztso.org.tr/icerik/uyelik-bilgilerini-guncelleme"
              >
                ÜYELİK BİLGİLERİNİ GÜNCELLEME
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideMenu;
