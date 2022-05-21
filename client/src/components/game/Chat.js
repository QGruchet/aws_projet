import { useEffect, useRef, useState } from 'react';
import { Button, Container, Form, Col, ListGroup, Row, Card } from 'react-bootstrap';
import io from 'socket.io-client';
import AuthService from '../../services/auth.service';
import '../../styles/chat.scss';

function Chat() {
  const maxMessages = 500;
  const messagesEndRef = useRef();
  const author = AuthService.getCurrentUser().user.username;
  //let chatSocket = io('/chat');
  const [validated, setValidated] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'message', author: 'Alice', content: 'Bonjour !'},
    { type: 'message', author: 'Bob', content: 'Salut 🙂'},
    { type: 'info', content: 'Bob remporte la manche !'}
  ]);
  const [messageBuffer, setMessageBuffer] = useState('');
  const [socket, setSocket] = useState(null);

  /*
  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  */

  const addInfo = (content) => {
    setMessages([...messages, { type: 'info', content }]);
  }

  const addMessage = (author, content) => {
    setMessages([...messages, { type: 'message', author, content }]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      event.target.reset();
      submit();
      setValidated(false);
    } else {
      event.stopPropagation();
      setValidated(true);
    }
  };

  const renderInfo = (message, i) => {
    return (
      <Card className='chat-item mb-2 text-info' key={i}>
        <Card.Body>
          <Card.Title>{message.content}</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  const renderMessage = (message, i) => {
    return (
      <Card className='chat-item mb-2' key={i}>
        <Card.Body>
          <Card.Title>{message.author}</Card.Title>
          <Card.Text>{message.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  const renderAllMessages = () => {
    return messages.map((m, i) => {
      if (m.type === 'info') {
        return renderInfo(m, i);
      } else {
        return renderMessage(m, i);
    }});
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'instant' })
  }

  const submit = () => {
    addMessage(author, messageBuffer);
    setMessageBuffer('');
    if (messages.length > maxMessages)
      setMessages(messages.slice(messages.length - maxMessages));
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <Container fluid='vh-100'>
      <Col className='flex-column'>
        <Card className='w-100'>
          <Card.Body className='chat'>
            <Card.Title className='text-center'>Chat</Card.Title>
            {renderAllMessages()}
            <div ref={messagesEndRef}/>
          </Card.Body>
        </Card>
        <Form className='chat-form' noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className='w-100'>
            <Col sm={9}>
              <Form.Group className='chat-form-control m-2 w-100'>
                <Form.Control required type='text' placeholder='Message'
                  onChange={(e) => setMessageBuffer(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Button className='chat-form-control m-2 w-100' type='submit'>Envoyer</Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Container>
  );
}

export default Chat;
