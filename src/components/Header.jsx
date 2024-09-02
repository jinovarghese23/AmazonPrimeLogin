import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <>
            <div>
                <Navbar expand="lg" className="bg-black">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img width='100px' src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" alt="" />
                        </Navbar.Brand>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Home
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Store
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="dark">Live TV</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Categories
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="dark">
                        <i class="fa-solid fa-magnifying-glass text-light"></i>
                        </Button>
                        <Button variant="dark">Subscribe Now</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                EN
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="dark">
                            <i class="fa-solid fa-user"></i>
                        </Button>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header