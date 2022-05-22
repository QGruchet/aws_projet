import { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
//import Canvas from '../components/game/canvas';
import Chat from '../components/game/Chat';
import AuthService from '../services/auth.service';

const Play = () => {
  const [socket, setSocket] = useState(AuthService.gameSocket());

  useEffect(() => {
    console.log('Play: useEffect');

    socket.on('connect', connectListener);
    socket.on('pong', pongListener);

    return () => {
      socket.off('connect', connectListener);
      socket.off('pong', pongListener);
    };
  }, [setSocket]);

  const connectListener = () => {
    console.log('Play: connectListener');
    console.log(socket.id);
  };

  const timeListener = (time) => {
    console.log('Play: timeListener');
    console.log(time);
  };

  const pongListener = () => {
    console.log('Play: pongListener');
  };

  const test = () => {
    socket.emit('ping');
  };

  return (
    <Container fluid='w-100'>
      <Col>
        <Navigation/>
        {/*<Canvas/>*/}
        <Chat socket={socket}/>
      </Col>
    </Container>
  )
};

export default Play;
