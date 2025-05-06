import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/chevaux">Nos Chevaux</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/about">À Propos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
