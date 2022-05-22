import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Canvas from '../components/game/Canvas';
import Chat from '../components/game/Chat';
import PlayersList from '../components/game/PlayersList';
import AuthService from '../services/auth.service';

const Play = () => {
  const [socket] = useState(AuthService.gameSocket());

  return (
    <Container fluid='w-100'>
      <Col>
        <Navigation/>
        <Row className='m-0'>
          <PlayersList socket={socket}/>
          <Col className='p-0 position-sticky' xs={8}>
            <Canvas socket={socket}/>
          </Col>
          <Chat socket={socket}/>
        </Row>
      </Col>
    </Container>
  )
};

export default Play;
