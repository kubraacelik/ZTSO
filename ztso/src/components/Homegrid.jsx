import "../styles/Homegrid.css";

function Homegrid() {
  return (
    <div className="homegrid-wrapper">
      <div className="homegrid-container">
        <div className="homegrid-list">
          <div className="homegrid-items">
            <div className="homegrid-item">
              <a
                href="https://www.ztso.org.tr/proje-kategori/projelerimiz"
                target="_blank"
              >
                PROJELER
              </a>
            </div>
            <div className="homegrid-item">
              <a
                href="https://www.ztso.org.tr/proje-kategori/raporlar"
                target="_blank"
              >
                RAPORLAR
              </a>
            </div>
            <div className="homegrid-item">
              <a href="https://www.ztso.org.tr/video-galeri" target="_blank">
                VİDEO GALERİSİ
              </a>
            </div>
            <div className="homegrid-item">
              <a href="https://www.ztso.org.tr/foto-galeri" target="_blank">
                FOTOĞRAF GALERİSİ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homegrid;
