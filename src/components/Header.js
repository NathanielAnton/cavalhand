// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/chevaux">Nos Chevaux</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">À Propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
