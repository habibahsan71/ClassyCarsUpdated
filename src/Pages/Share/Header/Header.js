import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';
import './Header.css'
const Header = () => {

    const { logOut, user, name, email } = useAuth();

    return (
        <>
            <Navbar bg="dark" className='header' expand="lg">
                <Container>
                    <Navbar.Brand className="nav-logo " href="#home"> <h2 className='text-danger'>Classy Cars</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center ">
                            <Nav.Link as={Link} to="/home" className='text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" className='text-white'>Explore More</Nav.Link>

                            {/* {
                                user?.email &&
                                <Nav.Link as={Link} to='/myorder' className='text-white'>My Orders</Nav.Link>
                            }

                            {
                                user?.email &&
                                <Nav.Link as={Link} to='/manageallorder' className='text-white'>Manage Orders</Nav.Link>
                            }

                            {
                                user?.email &&
                                <Nav.Link as={Link} to="/addservice" className='text-white' >Add Services</Nav.Link>
                            } */}
                            {
                                user?.email &&
                                <Nav.Link as={Link} to="/dashboard" className='text-white' >Dashboard</Nav.Link>
                            }

                            {/* {
                                user?.email &&
                                <Nav.Link as={Link} ><h4>{photoURL}</h4></Nav.Link>

                            } */}



                            {
                                user?.email ?

                                    <NavDropdown>
                                        <div className="text-center">
                                            <h6>{user.displayName || name}</h6>
                                            <p className="m-0 mb-2">{email}</p>
                                            <Button onClick={logOut} className="btn btn-danger">
                                                Sign Out
                                            </Button>
                                        </div>
                                    </NavDropdown>
                                    :
                                    <Nav.Link as={Link} className=' text-white' to="/login">Log In</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;