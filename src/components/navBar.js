import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Rush Royale Wiki</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="all-cards">All Cards</Nav.Link>
                <NavDropdown title="Tier lists" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Cards</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Itens</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Heros</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Boss</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link>Coded by:</Nav.Link>
                <Nav>
                    <a href="https://github.com/leoopardo">@leo.opardo</a>
                </Nav>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}
export default NavBar
    
    