import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
  const { users, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
        <Container>

        
          <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fw-bolder">
            <Nav.Link className="text-white navAll" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="text-white navAll" as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link className="text-white navAll" as={HashLink} to="/home#footer">Footer</Nav.Link>
            <Nav.Link className="text-white navAll" as={HashLink} to="/pricing">Pricing</Nav.Link>
            <Nav.Link className="text-white navAll" as={HashLink} to="/gallery">Gallery</Nav.Link>
            {users?.email ? <Button className="text-dark fw-bold p-2 m-2 navAll" onClick={logOut}>Logout</Button> :
              <Nav.Link className="text-white navAll" as={HashLink} to="/login">Login</Nav.Link>}
            <Navbar.Text className="text-warning fw-bolder">Sing In : <a className="text-warning" href="#login">{users?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </>
  );
};

export default Header;