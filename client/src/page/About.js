import React from 'react';
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <h1>A propos</h1>
      <p> Cette application a été réalisée dans le cadre de notre projet d'Application Web et Sécurité.</p>
      <p> Elle se présente sous la forme d'un jeu multijoueur en ligne.</p>
      <p> Elle a été réalisé en JavaScript pour le backend et utilise le framework <i>ReactJS</i> </p>
      <p> Contributeurs :
        <ul>
          <strong> GIRAUDO Mattéo </strong>
        </ul>
        <ul>
          <strong> GRUCHET Quentin </strong>
        </ul>
        <ul>
          <strong> HELAIN Chloé </strong>
        </ul>
        <ul>
          <strong> SOURSOU Adrien </strong>
        </ul>
      </p>
    </div>
  );
};

export default About;
