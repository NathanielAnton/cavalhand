// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col" style={{ marginTop: '10px' }}>
            <div>
              <h5>TÉLÉPHONE</h5>
              <p>08:30 - 12:30 | 14:00 - 17:00<br />Numéro : 06 20 65 70 40</p>
            </div>
          </div>
          <div className="col" style={{ marginTop: '10px' }}>
            <div>
              <h5>Réseaux Sociaux</h5>
              <a className="icon-container" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook fa-2x icon-hover"></i>
              </a>
              <a className="icon-container" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram fa-2x icon-hover"></i>
              </a>
            </div>
            <p style={{ marginBottom: '20px' }}>&copy; 2024 Caval'hand. Tous droits réservés.</p>
          </div>
          <div className="col" style={{ marginTop: '10px' }}>
            <div>
              <h5>ENVOYER UN MAIL</h5>
              <p>veroniqueserin@orange.fr</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
