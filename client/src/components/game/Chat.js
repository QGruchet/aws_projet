import { useEffect, useRef, useState } from 'react';
import { Button, Container, Form, Col, ListGroup, Row, Card } from 'react-bootstrap';
import AuthService from '../../services/auth.service';
import '../../styles/chat.scss';

function Chat({ socket }) {
  const maxMessages = 100;
  const messagesEndRef = useRef();
  const user = AuthService.getCurrentUser().user;
  const [validated, setValidated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageBuffer, setMessageBuffer] = useState('');

  useEffect(() => {
    socket.on('info', addInfo);
    socket.on('message', addMessage);

    return () => {
      socket.off('info', addInfo);
      socket.off('message', addMessage);
    };
  }, [socket, messages]);

  const addInfo = (data) => {
    setMessages([...messages, { type: 'info', content: data.content }]);
    if (messages.length >= maxMessages)
      setMessages(messages.slice(messages.length - maxMessages));
  }

  const addMessage = (data) => {
    setMessages([...messages, { type: 'message', author: data.author, content: data.content }]);
    if (messages.length >= maxMessages)
      setMessages(messages.slice(messages.length - maxMessages));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      socket.emit('message', messageBuffer);
      setMessageBuffer('');
      event.target.reset();
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

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <Container fluid='vh-100'>
      <Col className='flex-column'>
        <Card className='w-100'>
          <Card.Body className='chat'>
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
