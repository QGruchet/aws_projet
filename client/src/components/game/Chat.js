import { useEffect, useRef, useState } from 'react';
import { Button, Container, Form, Col, Row, Card } from 'react-bootstrap';
import '../../styles/chat.scss';

function Chat({ socket }) {
  const maxMessages = 40;
  const messagesEndRef = useRef();
  const [validated, setValidated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageBuffer, setMessageBuffer] = useState('');

  useEffect(() => {
    socket.on('clear-chat', clearChat);
    socket.on('info', addInfo);
    socket.on('message', addMessage);

    return () => {
      socket.off('clear-chat', clearChat);
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

  const clearChat = () => {
    setMessages([]);
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
      <Card className='chat-item mb-1 text-info' key={i}>
        <Card.Body className='p-1'>
          <Card.Title>{message.content}</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  const renderMessage = (message, i) => {
    return (
      <Card className='chat-item mb-1' key={i}>
        <Card.Body className='p-1'>
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
    <Col className='p-0'>
      <Card className>
        <Card.Body className='chat'>
          <Card.Title className='text-center'><div id='chat-title'>Chat</div></Card.Title>
          {renderAllMessages()}
          <div ref={messagesEndRef}/>
        </Card.Body>
      </Card>
      <Form className='chat-form' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='w-100'>
          <Col sm={8}>
            <Form.Group className='ms-2 mt-2 w-100'>
              <Form.Control required type='text' placeholder='Message'
                onChange={(e) => setMessageBuffer(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className='p-0' sm={4}>
            <Button className='mt-2 w-100' type='submit'>Envoyer</Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
}

export default Chat;
