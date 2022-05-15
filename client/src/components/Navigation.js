import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

export default function Navigation() {
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
            <Nav.Link href='/room-select'>Jouer</Nav.Link>
            <Nav.Link href='/about'>A propos</Nav.Link>
            { /* Search bar
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  className='me-1'
                  aria-label='Search'
                />
                <Button><BsSearch /></Button>
              </Form>
            */ }
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Link href='/login'>Se connecter</Nav.Link>
            <Button variant='outline-primary' href='/signup'>S'inscrire</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
