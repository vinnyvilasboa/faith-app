import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import FaithLogo from "../public/assets/faith-app.png"


function AppNav() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#home" style={{fontWeight:'700', fontSize:'24px'}}>
                        <Image
                            alt=""
                            src={require("../public/assets/faith-app.png").default.src}
                            width="50"
                            height="50"
                            // className="d-inline-block align-top"
                        />{' '}
                        360Prayer
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link href="/signup">
                            <Button bg="dark" variant="dark"><Nav.Link>Sign Up</Nav.Link></Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNav;