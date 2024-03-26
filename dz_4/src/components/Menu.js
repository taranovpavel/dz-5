import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.css";

function Menu() {
    return (
        <Navbar className={classes.menu} bg="dark" expand="lg">
            <Container  >
                <Navbar.Toggle className="me-2" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="me-2" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="me-2">register user</NavLink>
                        <NavLink to="/users" className="me-2">users list</NavLink>
                        <NavLink to="/registration"> registration</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu