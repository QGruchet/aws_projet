import { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { UsernamePattern, PasswordPattern } from '../utils/regex-pattern';
import StatusCodes from 'http-status-codes';
import ApiConnection from '../utils/api-connection';
import AuthService from '../services/auth.service';
import '../styles/form.scss';

function Signup() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({});
  let navigate = useNavigate();

  const dismissError = () => {
    setError('');
  };

  const handleSubmit = (event) => {
    dismissError();
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      trySignUp();
    } else {
      event.stopPropagation();
    }
    setValidated(true);
  };

  const setFormField = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const trySignUp = () => {
    ApiConnection.post('user/sign-up', {
      username: form.username,
      email: form.email,
      password: form.password
    }).then((res) => {
      AuthService.login(res.data);
      navigate('/');
    }).catch((err) => {
      console.log(err);
      const res = err.response;
      if (res.status === StatusCodes.CONFLICT)
      {
        if (res.data.name === 'username')
          setError('Le nom d\'utilisateur est déjà utilisé');
        else if (res.data.name === 'email')
          setError('L\'adresse email est déjà utilisée');
      }
      else
        setError('Une erreur est survenue lors de l\'inscription');
    });
  }

  return (
    <Container fluid='w-100' id='page'>
      <Navigation />
      <Form className='auth-form-container' noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>Création de compte</h1>
        <Form.Group className='auth-form-group' controlId='validation-login'>
          <Form.Control required type='text'
            placeholder="Nom d'utilisateur"
            pattern={UsernamePattern}
            onChange={(e) => setFormField('username', e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Veuillez entrer un nom d'utilisateur valide.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='auth-form-group' controlId='validation-email'>
          <Form.Control required type='email' placeholder='Adresse email'
            onChange={(e) => setFormField('email', e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Veuillez entrer une adresse email valide.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='auth-form-group' controlId='validation-password'>
          <Form.Control required type='password'
            placeholder='Mot de passe'
            pattern={PasswordPattern}
            onChange={(e) => setFormField('password', e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Le mot de passe doit contenir au moins 8 caractères dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
          </Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Button type='submit'>S'inscrire</Button>
      </Form>
    </Container>
  );
}

export default Signup;
