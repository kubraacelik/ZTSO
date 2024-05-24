import "../styles/Map.css";

function Map() {
  return (
    <div className="map-section">
      <div className="gmap-frame">
          <div>
          <iframe
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Yayla,%20Kad%C4%B1rga%20Cd.%20No:5,%2067100%20Zonguldak%20Merkez/Zonguldak+(Zonguldak%20Ticaret%20ve%20Sanayi%20Odas%C4%B1)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
          </div>
        </div>
      </div>
  );
}

export default Map;
