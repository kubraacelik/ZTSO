import "../styles/Project.css";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import trLocale from "@fullcalendar/core/locales/tr";
import img1 from "../assets/1.jpg";

function Project() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const projects = [
    { id: 1, image: img1, title: "Proje 1" },
    { id: 2, image: img1, title: "Proje 2" },
    { id: 3, image: img1, title: "Proje 3" },
    { id: 4, image: img1, title: "Proje 4" },
    { id: 5, image: img1, title: "Proje 5" },
    { id: 6, image: img1, title: "Proje 6" },
    { id: 7, image: img1, title: "Proje 7" },
    { id: 8, image: img1, title: "Proje 8" },
    { id: 9, image: img1, title: "Proje 9" },
    { id: 10, image: img1, title: "Proje 10" },
    { id: 11, image: img1, title: "Proje 11" },
    { id: 12, image: img1, title: "Proje 12" },
    { id: 13, image: img1, title: "Proje 13" },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="easy-menu">
          <div className="easy-menu-title">
            <p>KOLAY MENU</p>
          </div>
          <div className="easy-menu-list">
            <div className="easy-menu-item">
              <a href="https://www.ztso.org.tr/haberler">Haberler</a>
            </div>
            <div className="easy-menu-item">
              <a href="https://www.ztso.org.tr/icerik/online-islemler">
                Online İşlemler
              </a>
            </div>
            <div className="easy-menu-item">
              <a href="https://www.ztso.org.tr/etkinlikler">Etkinlik Takvimi</a>
            </div>
            <div className="easy-menu-item">
              <a href="https://www.ztso.org.tr/foto-galeri">
                Fotoğraf Galerisi
              </a>
            </div>
            <div className="easy-menu-item">
              <a href="https://www.ztso.org.tr/video-galeri">Video Galerisi</a>
            </div>
            <div className="easy-menu-item">
              <a href="https://www.ztso.org.tr/iletisim">İletişim Formu</a>
            </div>
          </div>
        </div>

        <div className="project-social-media">
    <div className="project-social-media-title">
        <p>SOSYAL MEDYA</p>
    </div>
    <div className="project-social-media-list">
        <a href="https://www.facebook.com/ztsokurumsal/" target="_blank">
            <FaFacebook className="project-social-media-icon" />
        </a>
        <a href="https://twitter.com/ZonguldakTSO" target="_blank">
            <FaXTwitter className="project-social-media-icon" />
        </a>
        <a href="https://www.instagram.com/ztsokurumsal/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
            <FaInstagram className="project-social-media-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCfRfP2XzGNdOhYkU2TW6yyQ" target="_blank">
            <FaYoutubeSquare className="project-social-media-icon" />
        </a>
    </div>
</div>

        <div className="project-events-container">
        <FullCalendar
        className="project-calendar"
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


      </div>
      <div className="project-container">
        <div className="project-title">
          <p>PROJELERİMİZ</p>
        </div>
        <div className="project-list">
          {currentItems.map((project) => (
            <div className="project-item" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt="" />
              </div>
              <div className="project-desc">
                <p>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
