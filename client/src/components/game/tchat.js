import {useEffect, useState} from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import {Col, ListGroup, Row} from "reactstrap";
import io from "socket.io-client";

function Chat() {
  let chatSocket = io('/chat');
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      submit();
    } else {
      event.stopPropagation();
    }
    setValidated(true);
  };

  const setFormField = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const submit = () => {
    e.preventDefault();
    if(input.value  !== '') {
      chatSocket.emit('chat message', input.value);
      console.log("message envoye " + input.value);
      input.value = '';
    }
  }

  return (
    <div id={"chat"}>
      <ListGroup>

      </ListGroup>
      <Form className='chat-form-container' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col>
            <Form.Group className='chat-form-group' controlId='validation-login'>
              <Form.Control required type='text'
                            placeholder="Message"
                            onChange={(e) => setFormField('message', e.target.value)}
              />
            </Form.Group>
        </Col>
        <Col>
          <Button type='submit'>Envoyer</Button>
        </Col>
      </Row>
      </Form>
    </div>
  );
}

export default Chat;
