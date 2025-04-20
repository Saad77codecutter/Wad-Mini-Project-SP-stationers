// src/comp/Users.js
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

const Users = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch customer data from the backend
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/customers');
        setCustomers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching customers:', error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading customers...</p>;
  }

  return (
    <Container className="mt-4">
      <h2>Users</h2>
      <p>Here you can manage user accounts.</p>
      <Row>
        {customers.map((customer) => (
          <Col key={customer._id} xs={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                {/* Displaying customer name */}
                <Card.Title>{customer.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{customer.mobile}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{customer.email}</Card.Subtitle>
                <Card.Text>
                  <strong>Address:</strong> {customer.address || 'No address available'}
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Joined on: {new Date(customer.createdAt).toLocaleDateString()}</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Users;
