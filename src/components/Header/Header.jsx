import React from "react";
import { Container, Navbar,Nav,Button } from "react-bootstrap";
import './Header.css'
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar className="navabr py-4" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo-text">
              ChakriBakri
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link>
                <ActiveLink to="/">Home</ActiveLink>
              </Nav.Link>
              <Nav.Link>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
              </Nav.Link>
              <Nav.Link>
                <ActiveLink to="/appliedjobs">Applied Jobs</ActiveLink>
              </Nav.Link>
              <Nav.Link>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </Nav.Link>
            </Nav>
            <Button className="my-btn" size="">
              Start Applying
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
