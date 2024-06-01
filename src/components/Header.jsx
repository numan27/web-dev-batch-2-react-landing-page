import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import IMAGES from '../assets'

const Header = () => {
    return (
        <div className='header'>
            <Navbar expand="lg" className="bg-transparent">
                <Container>
                    <Navbar.Brand href="#home"><img width={100} src={IMAGES.LOGO} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Solution</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Pricing</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Blog</Nav.Link>
                            <Nav.Link className='text-white' href="#link">About</Nav.Link>
                        </Nav>

                        <Nav className='gap-3'>
                            <Button className='border-0 outline-0 btn-login px-4'>Login </Button>
                            <Button className='border-0 outline-0 btn-getStarted px-4 primary_bg'>Get Started </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='d-flex align-items-center pt-5'>
                <Row className='mt-5'>
                    <Col md={8}>
                        <div className='text-white hero-content'>
                            <h1 className='mb-5'>Fast and Automatic Anime and Fantasy Writing</h1>
                            <p>Texts written by artificial intelligence</p>
                            <p>Immediate, easy and with amazing results</p>

                            <div className='mt-5 d-flex align-items-center gap-3'>
                                <Button size="lg" className='px-5 text-uppercase primary_bg outline-0 border-0 py-3'>free trial </Button>
                                <Button size="lg" className='px-5 text-uppercase py-3'>sign up with google </Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        List Box with Icons
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header