import main_logo from './assets/images/D_3_-removebg-preview.png'
import { Navbar, Nav, Container } from 'react-bootstrap';


function Header(){
    return(
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={main_logo}
                        height="70"
                        width="70"
                        className="d-inline-block align-top"
                        alt="Main Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="www.google.com">Home</Nav.Link>
                        <Nav.Link href="www.google.com">About</Nav.Link>
                        <Nav.Link href="www.google.com">Service</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default Header