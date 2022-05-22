import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import '../styles/navigation.scss';

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
          <Form>
            <FormControl
              type='search'
              className='mt-1'
              aria-label='Search'
              placeholder='Rechercher'
              size='sm'
            />
          </Form>
          <NavDropdown title={AuthService.getCurrentUser().user.username} align={{ lg: 'end' }}>
            <NavDropdown.Item href='/profile'>Mon profil</NavDropdown.Item>
            <NavDropdown.Item href='/settings'>Paramètres</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout} className='text-danger'>Déconnexion</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
    return (
      <Nav className='justify-content-end'>
        <Nav.Link href='/login'>Se connecter</Nav.Link>
        <Button variant='primary' href='/signup'>S'inscrire</Button>
      </Nav>
    );
  }

  const renderMenu = () => {
    if (AuthService.isAuthenticated())
      return (<Nav className='me-auto2'>
                <Nav.Link href='/room-select'>Jouer</Nav.Link>
                <Nav.Link href='/settings'>Paramètres</Nav.Link>
              </Nav>);
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' id='navbar'>
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
            <Nav.Link href='/about'>A propos</Nav.Link>
            <Nav.Link href='/tutorial'>Tutoriel</Nav.Link>
            {renderMenu()}
          </Nav>
          {renderAuthBouton()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
