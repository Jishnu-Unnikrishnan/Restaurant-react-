import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        //htmlcode
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-chef-restaurant-logo-png-image_8538757.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        
                    />{' '}&nbsp;
                    Chef Kitchen
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header