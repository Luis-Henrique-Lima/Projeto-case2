import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand><h1>DEVPLAY TV</h1></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse  style={{justifyContent:"flex-end"}} id="responsive-navbar-nav">
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sobre">
                        <Nav.Link>Sobre</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/filmes">
                        <Nav.Link>Filmes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>Contato</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
              <LinkContainer to="/admin/sobre">
                <NavDropdown.Item>Sobre(Admin)</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/filmes">
                <NavDropdown.Item>Filmes(Admin)</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/contato">
                <NavDropdown.Item>Contato(Admin)</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Menu;

