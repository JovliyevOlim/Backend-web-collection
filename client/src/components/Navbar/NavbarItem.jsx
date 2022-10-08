import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarItem() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Users</Nav.Link>
            <Nav.Link href="#features">Collection</Nav.Link>
            <Nav.Link href="#pricing">Items</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarItem;
