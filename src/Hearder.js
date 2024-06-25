import main_logo from "./assets/images/D_3_-removebg-preview.png";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header({
    scrollToSection,
    HeroRef,
    AboutRef,
    ServiceRef,
    ContactRef,
}) {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="custom-navbar"
        >
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={main_logo}
                        height="80"
                        width="80"
                        className="d-inline-block align-top"
                        alt="Main Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link
                            onClick={() => {
                                scrollToSection(HeroRef);
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href=""
                            onClick={() => scrollToSection(AboutRef)}
                            content
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                scrollToSection(ServiceRef);
                            }}
                        >
                            Service
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                scrollToSection(ContactRef);
                            }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
