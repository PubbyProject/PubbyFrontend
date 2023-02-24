import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='me-auto'>
                        <Navbar.Brand as={Link} to="/"><strong>Pubby</strong></Navbar.Brand>
                        <NavLink as={Link} to="/events"><strong>Events</strong></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;