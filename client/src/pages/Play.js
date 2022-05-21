import { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import io from 'socket.io-client';
import Navigation from "../components/Navigation";
import Canvas from "../components/game/canvas";
import Chat from "../components/game/Chat";

const Play = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <Container fluid='w-100'>
      <Col>
        <Navigation/>
        {/*<Canvas/>*/}
        <Chat/>
      </Col>
    </Container>
  )
};

export default Play;
