import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarItem() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/users"> Users </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/collection">Collection</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/items">Items</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/author">Author</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarItem;
