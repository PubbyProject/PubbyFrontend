import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/home'>Pubby</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#organizers'>Organizers</Nav.Link>
                        <Nav.Link href='/events'>Events</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </>
        );
    }

}

export default NavigationBar;