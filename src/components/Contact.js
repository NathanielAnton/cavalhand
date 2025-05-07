import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-card">
          <h2 className="contact-title">Je me présente</h2>
          <p>
            Moi c'est <strong>Véronique</strong>, Aide Médico-Psychologique depuis de nombreuses années, j'accompagne des enfants
            polyhandicapés dans tous les actes de la vie quotidienne.
          </p>
          <p>
            Mes appétences allant vers la sensorialité, il était donc naturel que je me forme tout d'abord aux troubles de l'oralité,
            à la stimulation basale et à l'haptonomie.
          </p>
          <p>
            Pour compléter et rassembler ces connaissances, j'ai suivi un cursus de médiation équine certifié en 2021 après un cycle de formation
            de 250 heures. J'exerce dans ma structure depuis quelques années en tant que <em>praticienne en médiation équine</em>.
          </p>
          <p>
            Propriétaire de 5 équidés, j'ai à cœur d'apporter mon soutien à toute personne en recherche de mieux-être.
            C'est avec plaisir que je partagerai un temps de découverte de soi, de l'autre, dans ce site magnifique.
          </p>
          <p className="contact-conclusion">
            Je serais ravie de pouvoir mettre à profit mes compétences pour vous faire découvrir le monde de la médiation équine.
          </p>

          <div className="contact-infos">
            <h4>Contact</h4>
            <p>📧 Mail : <a href="mailto:veroniqueserin@orange.fr">veroniqueserin@orange.fr</a></p>
            <p>📞 Téléphone : <a href="tel:0620657040">06 20 65 70 40</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
