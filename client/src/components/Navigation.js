import {
  Button,
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  let navigate = useNavigate();

  const logout = () => {
    AuthService.logout();
    navigate('/');
  }

  const renderAuthBouton = () => {
    if (AuthService.isAuthenticated())
      return (
        <Nav className='justify-content-end'>
          <Button onClick={logout} variant="outline-primary">
            Déconnexion
          </Button>
        </Nav>
      );
    return (
      <Nav className='justify-content-end'>
        <Nav.Link href='/login'>Se connecter</Nav.Link>
        <Button variant='outline-primary' href='/signup'>S'inscrire</Button>
      </Nav>
    );
  }

  const renderMenu = () => {
    if (AuthService.isAuthenticated())
      return (<Nav.Link href='/room-select'>Jouer</Nav.Link>);
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='/pencil.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/tutorial'>Tutoriel</Nav.Link>
            {renderMenu()}
            <Nav.Link href='/about'>A propos</Nav.Link>
          </Nav>
          {renderAuthBouton()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
