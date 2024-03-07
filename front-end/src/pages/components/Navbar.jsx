/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import 'bootstrap/js/dist/dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NavbarComponent() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    return navigate('/');
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-primary">
      <Container>
        <Navbar.Brand>Lexart Fullstack App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/app">
              <Nav.Link className="">
                <span className="">Products</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/app/add">
              <Nav.Link className="">
                <span className="">Add Product</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer onClick={ () => logout() } to="/">
              <Nav.Link className="">
                <span className="">Logout</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
