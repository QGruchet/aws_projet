import React from 'react';
import Navigation from "../components/Navigation";
import { Alert, Button, Container, Form } from 'react-bootstrap';


const About = () => {
  return (
    <Container fluid='w-100'>
      <Navigation />
      <h2 className='text-center mt-md-5 my-5 paragraph' id='subtitles'><strong>A propos :</strong></h2>
      <p id={"font"} className='text-center mt-md-5'> Cette application a été réalisée dans le cadre de notre projet d'Application Web et Sécurité.</p>
      <p id={"font"} className='text-center'> Elle se présente sous la forme d'un jeu multijoueur en ligne.</p>
      <p id={"font"} className='text-center'> Elle a été réalisée en JavaScript et utilise le framework <i>React</i> </p>
      <p id={"font"} className='text-center'> Contributeurs :
        <ul >
          <strong className='text-center mt-md-5'>GIRAUDO Mattéo</strong>
        </ul>
        <ul>
          <strong className='text-center'>GRUCHET Quentin</strong>
        </ul>
        <ul>
          <strong className='text-center'>HELAIN Chloé</strong>
        </ul>
        <ul>
          <strong className='text-center'>SOURSOU Adrien</strong>
        </ul>
      </p>
    </Container>
  );
};

export default About;
