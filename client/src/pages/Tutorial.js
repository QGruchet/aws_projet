import React from 'react';
import Navigation from "../components/Navigation";
import { Alert, Button, Container, Form } from 'react-bootstrap';


export default function Tutorial() {
  return (
    <Container fluid='w-100' >
      <Navigation />
      <h2 className='text-center mt-md-5' id='subtitles'><strong>How to play this game ?</strong></h2>
    </Container>
  );
};
