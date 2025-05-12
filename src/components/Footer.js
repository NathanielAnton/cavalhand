// src/components/Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col" style={{ marginTop: '10px' }}>
            <div>
              <h5>Contact</h5>
              <p>Mail : veroniqueserin@orange.fr<br />Tél : 06 20 65 70 40</p>
            </div>
          </div>
          <div className="col" style={{ marginTop: '10px' }}>
            <div>
              <h5>Réseaux Sociaux</h5>
              <a className="icon-container" href="https://www.facebook.com/share/16CFVnrxnf/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
              <a className="icon-container" href="https://www.instagram.com/caval_hand?igsh=MTBvams2M3l1Zmxraw==" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
            </div>
            <p style={{ marginBottom: '20px' }}>&copy; 2025 Caval'hand. Tous droits réservés.</p>
          </div>
          <div className="col" style={{ marginTop: '10px' }}>
            <div>
              <h5>Caval'Hand</h5>
              <p>Siret : 903917334000018<br />Lieu dit la Coutancière<br />79240 LE BUSSEAU </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
