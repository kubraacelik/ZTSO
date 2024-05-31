import { Link } from "react-router-dom";
import "../styles/Homegrid.css";

function Homegrid() {
  const handleLinkClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="homegrid-wrapper">
      <div className="homegrid-container">
        <div className="homegrid-list">
          <div className="homegrid-items">
            <div className="homegrid-item">
              <Link
                to="/projeler"
                onClick={(event) =>
                  handleLinkClick(event, `${window.location.origin}/projeler`)
                }
              >
                PROJELER
              </Link>
            </div>
            <div className="homegrid-item">
              <Link
                to="/raporlar"
                onClick={(event) =>
                  handleLinkClick(event, `${window.location.origin}/raporlar`)
                }
              >
                RAPORLAR
              </Link>
            </div>
            <div className="homegrid-item">
              <Link
                to="/raporlar"
                onClick={(event) =>
                  handleLinkClick(
                    event,
                    `${window.location.origin}/video-galeri`
                  )
                }
              >
                VİDEO GALERİSİ
              </Link>
            </div>
            <div className="homegrid-item">
              <Link
                to="/raporlar"
                onClick={(event) =>
                  handleLinkClick(
                    event,
                    `${window.location.origin}/foto-galeri`
                  )
                }
              >
                FOTOĞRAF GALERİSİ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homegrid;
