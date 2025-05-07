import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.body.classList.add('about-background');
    return () => {
      document.body.classList.remove('about-background'); // nettoyage au changement de page
    };
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-text about-intro">
          <h2>À Propos de Nous</h2>
          <p>
            La <strong>Société de Médiation Animale</strong> est dédiée à fournir des services thérapeutiques assistés par les chevaux.
            Nous croyons au pouvoir de la relation entre l'homme et le cheval pour favoriser le bien-être et la guérison.
          </p>
        </div>

        <div className="section-text about-block">
          <h3>Médiation équine et visée thérapeutique</h3>
          <p>
            La thérapie avec le cheval est une approche <strong>psycho-corporelle</strong> qui vise au remaniement des modalités relationnelles :
            de la communication à soi, à autrui, et au monde extérieur.
          </p>
          <p>
            Les objectifs ne résident pas dans l’apprentissage d’une technique ou du code équestre, mais dans l’opportunité de s’éprouver dans une
            rencontre bienveillante.
          </p>
          <p className="highlight">
            Ressentir, interagir, vivre pleinement des émotions dans son propre corps, accompagné d’un partenaire non-jugeant.
          </p>
        </div>

        <div className="section-text about-block">
          <h4>Qui peut être concerné ?</h4>
          <p>
            Toute personne en recherche de mieux-être – <em>estime de soi, confiance, recentrage</em> – ou traversant une période de doute,
            d’interrogation, peut bénéficier de cet accompagnement.
          </p>
          <p>Le thérapie avec le cheval s'adresse :</p>
          <ul>
            <li>à toute personne en recherche de mieux être (estime de soi, confiance en soi)</li>
            <li>à toute personne en situation d'interrogation, en demande d'aide ou de soutien.</li>
          </ul>
          <p>
            La demande d'accompagnement peut venir du bénéficiaire lui même, de la famille, d'une équipe éducative ou de professionnels du soin.
          </p>
        </div>

        <div className="section-text about-block">
          <h4>Pourquoi le cheval ?</h4>
          <p>
            Le cheval est porteur d’une <strong>symbolique puissante</strong> : force, respect, douceur maternelle.
            Curieux et attentif, il initie les interactions sans jamais les forcer.
          </p>
          <p>
            C’est un miroir sensible de nos émotions, un partenaire précieux dans la relation thérapeutique.
          </p>
        </div>
      </div>

    </section >
  );
};

export default About;
