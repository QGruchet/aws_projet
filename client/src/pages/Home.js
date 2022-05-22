import React from 'react';
import Navigation from '../components/Navigation';
import { Alert, Button, Container, Form } from 'react-bootstrap';

export default function Home() {
  return (
    <Container fluid='w-100'>
      <div className='home-container'>
        <Navigation />
        <img src='/logo.png' alt='logo' id='logo' className="mx-auto d-block md-2 mt-5" />
        <p id={"font"} className='text-center mt-md-5'>Bienvenue dans ce jeu complétement original et innovant.</p>
        <p id={"font"} className='text-center'>Vous devez faire deviner des mots ou des expressions de la langue française aux autres joueurs, le tout en vous aidant de vos talents d'artiste.</p>
        <p id={"font"} className='text-center'>Le joueur qui aura deviné le plus de mots dans le temps imparti se verra sacré champion de <strong>Let's Drawmadère.</strong></p>
        <p id={"font"} className='text-center'>Libérez la patte artistique qui sommeil en vous et faites nous votre plus beau dessin.</p>
      </div>
    </Container>
  );
};
