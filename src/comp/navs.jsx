import React from 'react'
import {Container, Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
        <Navbar bg='light' expand='lg'>
            <Container >
                <Navbar.Brand className='fs-2 text-warning fw-bolder'>React-Redux</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar nav'/>
                <Navbar.Collapse id='responsive-navbar nav'>
                    <Nav className="nav fs-4 justify-content-center fw-semibold flex-grow-1 gap-5 px-5" >
                        <Nav.Link as={Link} to="/" className='text-info '>HOME</Nav.Link>
                        <Nav.Link as={Link} to="/product" className='text-info '>Products</Nav.Link>
                        <Nav.Link  as={Link} to="cart" className='text-info '>Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar