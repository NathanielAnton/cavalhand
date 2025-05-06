// src/components/Home.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {

  useEffect(() => {
    if (!L.DomUtil.get('map')) {
      const map = L.map('map').setView([46.5831, -0.594466], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([46.5831, -0.594466]).addTo(map)
        .bindPopup("Caval'hand, La Coutensière").openPopup();
    }
  }, []);

  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <img src="img/LOGO.jpg" alt="LOGO" style={{ width: '50%', marginBottom: '20px', borderRadius: '50%' }} />
              <h2>Bienvenue à La Coutensière</h2>
              <p className="section-text">
                Un lieu de bien-être et de sérénité où nous proposons des séances d'équithérapie. Situé dans un cadre naturel paisible, notre centre accueille biquettes, chats et chevaux.
                <br /><br />
                Nos séances offrent une approche psycho-corporelle pour améliorer les relations interpersonnelles, la communication, et le bien-être général.
                <br /><br />
                Que vous cherchiez à vous reconnecter avec vous-même, améliorer vos relations aux autres ou simplement profiter d'un moment de détente, La Coutensière est l'endroit idéal pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#495371', fontFamily: 'Georgia, serif' }}>Notre Structure</h2>
          <p className="section-text" style={{ fontFamily: 'Arial, sans-serif', color: '#626D71', lineHeight: '1.8', textAlign: 'justify' }}>
            Venez nous rendre visite à notre centre d'équithérapie situé dans le petit village du Busseau, en bordure de
            chemins piétonniers et en pleine campagne, Caval'Hand est un lieu appelant à l'évasion, la réflexion et à
            l'apaisement
            <br />
            Les séances auront lieu sur le domaine ou dans un manège fermé et sécurisant, à l'abri des mauvaises conditions
            météorologiques.
            <br />
            Possibilité de venir pique-niquer, profiter de la vue ou même d'organiser des événements en famille dans la
            bonne humeur.
          </p>
          <div id="map" style={{ height: '400px', marginTop: '20px' }}></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
