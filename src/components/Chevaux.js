import React, { useState, useRef } from 'react';
import harry from '../img/harry.jpg';
import declic from '../img/declic2.jpg';
import fifi from '../img/fifi2.jpg';
import ursul from '../img/ursul2.jpg';
import bonneco from '../img/bonneco2.jpg';

const Chevaux = () => {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    name: '',
    description: '',
    img: '',
    position: { x: 0, y: 0 } // Pour stocker la position du cheval cliqué
  });

  // Sample image for placeholder - in your actual component, you'll use your imported images
  const placeholderImg = harry;
  const placeholderImgDeclic = declic;
  const placeholderImgFifi = fifi;
  const placeholderImgUrsul = ursul;
  const placeholderImgBonneco = bonneco;

  const horses = [
    {
      name: 'Harry',
      description: "Salut tout le monde 👋 Moi c'est Harry 🐴 Je suis un magnifique cheval demi-trait 😊Je suis un gros câlinou, très calme et j'adore les gratouilles 👐 J'attends de vous rencontrer avec impatience 🤗 ‼ Attention à vos pieds 🦶 J'ai de très beaux sabots 🧲",
      img: placeholderImg,
    },
    {
      name: 'Ursul',
      description: "Coucou moi c'est Ursul 🐴 Je suis un amour de poney qui fera tout pour faire plaisir 🥰 J'adore être papouillé par les enfants et j'adore par dessus tout les carottes 🥕 Je suis légèrement introverti 👉👈, mais j'ai à cœur de bien faire mon travail",
      img: placeholderImgUrsul,
    },
    {
      name: 'Déclic & Hip-Hop',
      description: "Voici Déclic & Hip-Hop 🐴 Deux très beaux Shetlands d'1m. ❤  🔸 Déclic aime tout le monde. Il grignote tout ce qui passe à sa portée 🥕 et n'en fait qu'à sa tête ! Normal c'est un shetland.. 😁 🔸 Hip Hop est encore étalon. C'est le fou fou de la bande 🤪. Un peu perturbant mais très gentil et intelligent 🧐. Et c'est le fils de Déclic 🙌",
      img: placeholderImgDeclic,
    },
    {
      name: 'Boneco',
      description: "Salut 👋 Moi c'est Boneco, beau et costaud 💪 Je suis un jeune poney Portugais qui sait déjà tout faire. Faut juste me convaincre.. oui je suis légèrement têtu 🙃 On peut monter à 3 sur mon dos tellement je suis balèze 🐎 A bientôt j'espère 🤞",
      img: placeholderImgBonneco,
    },
    {
      name: 'Feeling Cash',
      description: "Hello moi c'est Feeling Cash 🐴 Je suis un magnifique Quater Horse, dit cheval de Cow-Boy 🤠 Je suis un jeune poney très émotif et très expressif. 🥺 J'ai besoin d'avoir confiance en toi pour que tu puisses m'approcher. Le câlin, c'est pas pour tout de suite.🙃 Mais je travaille très bien attaché à une longe ou en liberté. Alors, prêt pour venir me rencontrer ? 😊",
      img: placeholderImgFifi,
    },
  ];

  // Références pour les éléments de cheval
  const horseRefs = useRef([]);

  // Récupérer la position du cheval cliqué
  const openModal = (horse, index) => {
    const horseElement = horseRefs.current[index];
    if (horseElement) {
      const rect = horseElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setModalInfo({
        show: true,
        ...horse,
        position: { x: centerX, y: centerY }
      });
    } else {
      setModalInfo({ show: true, ...horse });
    }
  };

  const closeModal = () => {
    setModalInfo({ show: false, name: '', description: '', img: '', position: { x: 0, y: 0 } });
  };

  return (
    <div className="container mt-5 text-center">
      <div className="section-text mb-4" style={{ width: '60%', margin: '0 auto' }}>
        <h2 className="text-center">Nos Chevaux</h2>
        <p className="text-justify">
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
              onClick={() => openModal(horse, index)}
              ref={el => horseRefs.current[index] = el}
              style={{ cursor: 'pointer' }}
            >
              <img src={horse.img} alt={horse.name} className="horse-image" />
              <h3 className="horse-name">{horse.name}</h3>
            </div>
          ))}
        </div>

        {/* Thought Bubble Modal with Horse Image */}
        {modalInfo.show && (
          <div className="custom-modal-backdrop" onClick={closeModal}>
            <div
              className="thought-bubble-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeModal}>×</button>
              <h5 className="modal-title">{modalInfo.name}</h5>
              <p className="modal-description">{modalInfo.description}</p>

              {/* Petite image du cheval en bas de la bulle */}
              <div className="horse-bubble-portrait">
                <img src={modalInfo.img} alt={modalInfo.name} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chevaux;