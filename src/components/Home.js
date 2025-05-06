// src/components/Home.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import logo from '../img/logoC.png';

const Home = () => {

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (mapContainer && !mapContainer._leaflet_id) {
      const map = L.map(mapContainer).setView([46.5831, -0.594466], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([46.5831, -0.594466]).addTo(map)
        .bindPopup("Caval'hand, La Coutencière").openPopup();
    }
  }, []);

  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <img
                src={logo}
                alt="LOGO"
                style={{
                  width: '50%',
                  marginBottom: '20px',
                  borderRadius: '50%',
                  opacity: '70%',
                  marginTop: '7%',
                }}
              />
              <div className="section-text text-start">
                <h2>Bienvenue à La Coutencière</h2>
                <p>
                  Un lieu de bien-être et de sérénité où nous proposons des séances d'équithérapie. Situé dans un cadre naturel paisible, notre centre accueille biquettes, chats et chevaux.
                </p>
                <p>
                  Nos séances offrent une approche psycho-corporelle pour améliorer les relations interpersonnelles, la communication, et le bien-être général.
                </p>
                <p>
                  Que vous cherchiez à vous reconnecter avec vous-même, améliorer vos relations aux autres ou simplement profiter d'un moment de détente, La Coutencière est l'endroit idéal pour vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="location-section">
        <div className="container">

          <div className="section-text">
            <h2>
              Notre Structure
            </h2>
            <p>
              Venez nous rendre visite à notre centre d'équithérapie situé dans le petit village du Busseau, en bordure de
              chemins piétonniers et en pleine campagne, Caval'Hand est un lieu appelant à l'évasion, la réflexion et à
              l'apaisement.
              <br />
              Les séances auront lieu sur le domaine ou dans un manège fermé et sécurisant, à l'abri des mauvaises conditions
              météorologiques.
              <br />
              Possibilité de venir pique-niquer, profiter de la vue ou même d'organiser des événements en famille dans la
              bonne humeur.
            </p>
          </div>

          <div id="map" style={{ height: '400px', marginTop: '20px' }}></div>
        </div>
      </section>
    </div >
  );
};

export default Home;
