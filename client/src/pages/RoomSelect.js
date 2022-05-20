import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import React from 'react';
import {Col, Form, Row} from "reactstrap";

const RoomSelect = () => {
  return (
    <div>
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
    </div>
  );
};

export default RoomSelect;
