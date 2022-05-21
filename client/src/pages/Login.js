import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ApiConnection from '../utils/api-connection';
import AuthService from '../services/auth.service';
import '../styles/auth-form.scss';

function Login() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({});
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      tryLogin();
      setValidated(false);
      event.target.reset();
    } else {
      event.stopPropagation();
      setValidated(true);
    }
  };

  const setFormField = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const tryLogin = () => {
    ApiConnection.post('user/login', {
      login: form.login,
      password: form.password
    }).then((res) => {
      AuthService.login(res.data);
      navigate('/');
    }).catch((err) => {
      setError('Identifiant ou mot de passe invalide');
    });
  }

  return (
    <div>
      <Navigation />
      <Form className='auth-form-container' noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>Connexion</h1>
        { error.length > 0 && <Alert variant='danger'>{error}</Alert> }
        <Form.Group className='auth-form-group' controlId='validation-login'>
          <Form.Control className='auth-form-control' required type='text'
            placeholder="Adresse email ou nom d'utilisateur"
            onChange={(e) => setFormField('login', e.target.value)}
          />
        </Form.Group>
        <Form.Group className='auth-form-group' controlId='validation-password'>
          <Form.Control className='auth-form-control' required type='password'
            placeholder='Mot de passe'
            onChange={(e) => setFormField('password', e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button type='submit'>Se connecter</Button>
      </Form>
    </div>
  );
}

export default Login;
