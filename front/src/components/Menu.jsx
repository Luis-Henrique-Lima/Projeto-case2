import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand><img src="https://user-images.githubusercontent.com/85020469/222034303-c769a11c-bc6b-48b1-8617-d7d4457e0e28.png" style="
    height: 100px;
    width: 392px;
"></Navbar.Brand>
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

