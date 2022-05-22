import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../components/Navigation';
//import Canvas from '../components/game/canvas';
import Chat from '../components/game/Chat';
import PlayersList from '../components/game/PlayersList';
import AuthService from '../services/auth.service';

const Play = () => {
  const [socket] = useState(AuthService.gameSocket());

  return (
    <Container fluid='vh-100'>
      <Col>
        <Navigation/>
        <Row className='m-0 p-0 w-100'>
          <Col className='m-0 p-0 position-fixed' xs={2}>
              <PlayersList socket={socket}/>
          </Col>
          <Col className='m-0 p-0 w-0'></Col>
          <Col className='m-0 p-0 position-fixed' xs={10}>
            {/*<Canvas/>*/}
          </Col>
          <Col className='m-0 p-0' xs={2}>
            <Chat socket={socket}/>
          </Col>
        </Row>
      </Col>
    </Container>
  )
};

export default Play;
