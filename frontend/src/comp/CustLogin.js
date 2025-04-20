import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    address: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('🎉 Signed up successfully!');
      setIsLogin(true); // Switch to login mode after signup
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error during signup. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        mobile: formData.mobile,
        password: formData.password
      });

      const { token, customerId } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('customerId', customerId);
      localStorage.setItem('isLoggedIn', 'true');
      alert('✅ Logged in successfully!');
      navigate('/stationery');
    } catch (error) {
      console.error('Login error:', error);
      alert('Error during login. Please check your credentials.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow p-4">
            <Card.Title className="text-center mb-4 fs-3 fw-bold">
              {isLogin ? 'Customer Login' : 'Customer Signup'}
            </Card.Title>

            <Form onSubmit={isLogin ? handleLogin : handleSignup}>
              <Form.Group className="mb-3" controlId="formMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {!isLogin && (
                <>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Enter address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}

              <Button variant="primary" type="submit" className="w-100">
                {isLogin ? 'Login' : 'Signup'}
              </Button>
            </Form>

            <div className="text-center mt-3">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Signup' : 'Login'}
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustLogin;
