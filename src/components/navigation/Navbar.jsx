import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
    return (
        <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='#'>Pubby</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#organizers'>Organizers</Nav.Link>
                    <Nav.Link href='#events'>Events</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default NavigationBar;