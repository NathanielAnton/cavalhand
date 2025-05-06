import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Chevaux from './components/Chevaux';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chevaux" element={<Chevaux />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
