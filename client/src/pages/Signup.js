import { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import { UsernamePattern, PasswordPattern } from '../utils/regex-pattern';
import AuthService from '../services/auth.service';
import '../styles/form.scss';
import axios from 'axios';

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    console.log('handleSubmit');
    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios.post('http://localhost:3000/user/sign-up', {
        username: form.username,
        email: form.email,
        password: form.password
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }
    setValidated(true);
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return (
    <div>
      <Navigation />
      <Form className='auth-form-container' noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>Création de compte</h1>
        <Form.Group className='auth-form-group' controlId='validation-login'>
          <Form.Control required type='text'
            placeholder="Nom d'utilisateur"
            pattern={UsernamePattern}
            onChange={(e) => setField('username', e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Veuillez entrer un nom d'utilisateur valide.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='auth-form-group' controlId='validation-email'>
          <Form.Control required type='email' placeholder='Adresse email'
            onChange={(e) => setField('email', e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Veuillez entrer une adresse email valide.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='auth-form-group' controlId='validation-password'>
          <Form.Control required type='password'
            placeholder='Mot de passe'
            pattern={PasswordPattern}
            onChange={(e) => setField('password', e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Le mot de passe doit contenir au moins 8 caractères dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
          </Form.Control.Feedback>
        </Form.Group>
        <br></br>
        <Button type='submit'>S'inscrire</Button>
      </Form>
    </div>
  );
}

export default FormExample;
