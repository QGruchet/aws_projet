import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import React from 'react';
import {Col, Form, Row} from "reactstrap";
import { Alert, Button, Container } from 'react-bootstrap';

const RoomSelect = () => {
  return (
    <Container fluid='w-100' id='page'>
      <Navigation/>
      <Row className= "justify-content-center" id={"create-room"}>
        <Form className='create-room-form-container d-flex'>
          <Col>
            <button id={"btn1"} type='submit'>
              <NavLink to={{
                pathname: "/Play",
                state: { mode: "join" }
              }}>
                Rejoindre une partie
              </NavLink>
            </button>
          </Col>
          <Col>
            <button id={"btn1"}>
            <NavLink to={{
                pathname: "/create-room",
                state: { mode: "create" }
              }}>
                  Créer une partie
              </NavLink>
            </button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default RoomSelect;
