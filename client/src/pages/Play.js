import { useEffect, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import io from 'socket.io-client';
import Navigation from '../components/Navigation';
//import Canvas from '../components/game/canvas';
import Chat from '../components/game/Chat';

let socketInstance = io('http://localhost:3000/game');

const Play = () => {
  const [socket, setSocket] = useState(socketInstance);

  useEffect(() => {
    socketInstance.on('pong', pongListener);

    return () => {
      socketInstance.off('pong', pongListener);
      socketInstance.disconnect();
    };
  }, [setSocket]);

  const pongListener = () => {
    console.log("Play.js - socket.on('pong')");
    socketInstance.emit("pong");
  };

  const test = () => {
    socketInstance.emit('ping');
  };

  return (
    <Container fluid='w-100'>
      <Col>
        <Navigation/>
        {/*<Canvas/>*/}
        <Chat socket={socket}/>
        <Button onClick={test}>Test</Button>
      </Col>
    </Container>
  )
};

export default Play;
