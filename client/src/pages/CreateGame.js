
import {useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Navigation from "../components/Navigation";
import {Col, Row} from "reactstrap";

function createRoom() {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity() && form.numPlayer !== undefined && form.numRound !== undefined && form.timeTimer !== undefined) {
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
    const data = {numPlayer: form.numPlayer, numRound: form.numRound, timeTimer: form.timeTimer, privateGame: form.privateGame}
    console.log(data);
    navigate('/Play')
  }

  return (
    <div>
      <Navigation/>
      <Row className= "justify-content-center" id={"create-room"}>
        <Form className='create-room-form-container d-flex' noValidate validated={validated} onSubmit={handleSubmit}>
          <Col md={3}>
            <Form.Group className='create-room-form-group' controlId='validation-login'>
              <Form.Label>Nombre de joueurs max :</Form.Label>
              <Form.Control as={"select"}
                            onChange={(e) => setFormField('numPlayer', e.target.value)}
                            defaultValue={"defaut"}>
                <option value={"defaut"} disabled>Faites votre choix</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>

              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={3}>
          <Form.Group className='create-room-form-group' >
            <Form.Label>Nombre de manches :</Form.Label>
            <Form.Control as={"select"}
                          onChange={(e) => setFormField('numRound', e.target.value)}
                          defaultValue={"defaut"}>
              <option value={"defaut"} disabled>Faites votre choix</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className='create-room-form-group' >
              <Form.Label>Durée d'une manche (s) :</Form.Label>
              <Form.Control as={"select"}
                            onChange={(e) => setFormField('timeTimer', e.target.value)}
                            defaultValue={"defaut"}>
                <option value={"defaut"} disabled>Faites votre choix</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={60}>60</option>
                <option value={90}>90</option>
                <option value={120}>120</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <br/>
          <Col>
            <Form.Check
              className="check-private-game"
              type="switch"
              id="custom-switch"
              label="Partie privée ?"
              onChange={(e) => setFormField('privateGame', e.target.value)}
            />
          </Col>
          <Col>
           <Button type='submit' className={"begin-game-button"}>Commencer</Button>
          </Col>
        </Form>
      </Row>
    </div>
  );
}

export default createRoom;

