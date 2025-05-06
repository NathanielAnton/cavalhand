import React, { useState } from 'react';
import harry from '../img/harry.jpg';

const Chevaux = () => {
  const [modalInfo, setModalInfo] = useState({ show: false, name: '', description: '', img: '' });

  const horses = [
    {
      name: 'Harry',
      description: "Cheval de race Irish Cob d'1m60. Très calme et sensible, c'est un gros nounours plein de poils et porteur.",
      img: harry,
    },
    {
      name: 'Ursul',
      description: "Poney d'1m15, légèrement introverti, il a à cœur de bien faire son travail. Il adore les enfants et faire des câlins lorsqu'on a gagné sa confiance.",
      img: harry,
    },
    {
      name: 'Déclic',
      description: "Shetland d'1m, à l'aise avec tout le monde, il grignote tout ce qui passe à sa portée. Il n'en fait qu'à sa tête... Normal c'est un shetland !!",
      img: harry,
    },
    {
      name: 'Hip-Hop',
      description: "Shetland d'1m, encore étalon, c'est le fou fou de la bande. Un peu turbulent mais gentil et très intelligent. (C'est le fils de Déclic)",
      img: harry,
    },
    {
      name: 'Feeling Cash',
      description: "Le dernier arrivé. Jeune et dynamique, c'est un grand poney cow-boy.",
      img: harry,
    },
  ];

  const openModal = (horse) => {
    setModalInfo({ show: true, ...horse });
  };

  const closeModal = () => {
    setModalInfo({ show: false, name: '', description: '', img: '' });
  };


  return (
    <div className="container mt-5 text-center">
      <div className="section-text mb-4" style={{ width: '60%', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Nos Chevaux</h2>
        <p style={{ textAlign: 'justify' }}>
          Nos services incluent des sessions individuelles et de groupe, adaptées aux besoins spécifiques de chaque client.
          Nos thérapeutes certifiés travaillent en étroite collaboration avec nos chevaux pour offrir des expériences
          thérapeutiques efficaces et enrichissantes.
        </p>
      </div>

      <div className="container mt-5 text-center">
        <div className="row justify-content-center">
          {horses.map((horse, index) => (
            <div
              className="col-md-4 horse-profile"
              key={index}
              onClick={() => openModal(horse)}
              style={{ cursor: 'pointer' }}
            >
              <img src={horse.img} alt={horse.name} className="horse-image" />
              <h3 className="horse-name">{horse.name}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalInfo.show && (
          <div className="modal d-block" tabIndex="-1" onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalInfo.name}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <p style={{ textAlign: 'justify' }}>{modalInfo.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chevaux;
