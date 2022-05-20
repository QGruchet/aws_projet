import React from 'react';
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <h1>A propos</h1>
      <p className='text-center'> Cette application a été réalisée dans le cadre de notre projet d'Application Web et Sécurité.</p>
      <p className='text-center'> Elle se présente sous la forme d'un jeu multijoueur en ligne.</p>
      <p className='text-center'> Elle a été réalisée en JavaScript et utilise le framework <i>React</i> </p>
      <p className='text-center'> Contributeurs :
        <ul>
          <strong>GIRAUDO Mattéo</strong>
        </ul>
        <ul>
          <strong>GRUCHET Quentin</strong>
        </ul>
        <ul>
          <strong>HELAIN Chloé</strong>
        </ul>
        <ul>
          <strong>SOURSOU Adrien</strong>
        </ul>
      </p>
    </div>
  );
};

export default About;