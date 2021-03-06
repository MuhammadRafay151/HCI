import { Nav, Navbar } from "react-bootstrap"
const navbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">CERTIFIS-HCI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#int">Introduction</Nav.Link>
                        <Nav.Link href="#ar">Artifacts</Nav.Link>
                        <Nav.Link href="#sc">Scenrios</Nav.Link>
                        <Nav.Link href="#ta">Task Analysis</Nav.Link>
                        <Nav.Link href="#ua">User Analysis</Nav.Link>
                        <Nav.Link href="#ot">Our Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default navbar