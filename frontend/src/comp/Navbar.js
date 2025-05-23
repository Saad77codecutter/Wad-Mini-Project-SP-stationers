import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Badge, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../sp.png';
import cart from '../Image/cart.png';
import home from '../Image/home.png';
import { useSelector } from 'react-redux';

function AppNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartProduct = useSelector(state => state.cartReducer);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <Navbar 
        bg="warning" 
        variant="light" 
        expand="lg" 
        className="py-2 shadow-sm"
        style={{ zIndex: 1000 }}
      >
        <Container>
          {/* Logo Container with fixed size */}
          <Navbar.Brand 
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer', height: '50px', display: 'flex', alignItems: 'center' }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: '250%', width: 'auto', maxWidth: '120px', objectFit: 'contain' }} 
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center">
              <Nav.Link onClick={() => navigate('/')}>
                <img src={home} alt="Home" style={{ width: 25, height: 25 }} />
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/about')}>About Us</Nav.Link>
              <Nav.Link onClick={() => navigate('/stationery')}>Stationery</Nav.Link>
              <Nav.Link onClick={() => navigate('/gift')}>Gifts</Nav.Link>
              <Nav.Link onClick={() => navigate('/branches')}>Our Stores</Nav.Link>
            </Nav>

            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link onClick={() => navigate('/cart')} className="d-flex align-items-center">
                <img src={cart} alt="Cart" style={{ width: 25, height: 25 }} />
                <Badge bg="secondary" className="ms-1">{cartProduct.length}</Badge>
              </Nav.Link>

              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                  <Nav.Link onClick={() => navigate('/cls')}>New Customer?</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Push content below navbar */}
      <div style={{ paddingTop: '00px' }}>
        {/* Your page content goes here */}
      </div>
    </>
  );
}

export default AppNavbar;
