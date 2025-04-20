import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, Spinner, Alert, Form } from 'react-bootstrap';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingStatusId, setUpdatingStatusId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/orders/');
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch orders.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    setUpdatingStatusId(orderId);
    try {
      const res = await axios.put(`http://localhost:5000/api/orders/${orderId}`, {
        status: newStatus,
      });

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, order_status: res.data.order_status } : order
        )
      );
    } catch (err) {
      setError('Failed to update order status.');
    }
    setUpdatingStatusId(null);
  };

  return (
    <Container className="mt-4">
      <h2>Orders</h2>
      {loading ? (
        <Spinner animation="border" variant="warning" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : orders.length === 0 ? (
        <Alert variant="info">No orders found.</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Products</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.customer?.name}</td>
                <td>
                  <div>{order.customer?.email}</div>
                  <div>{order.customer?.phone}</div>
                </td>
                <td>{order.customer?.address}</td>
                <td>
                  <ul>
                    {order.products.map((item, index) => (
                      <li key={index}>
                        {item.product?.name || 'Deleted Product'} × {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{order.total_price}</td>
                <td>
                  <Form.Select
                    value={order.order_status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    disabled={updatingStatusId === order._id}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Complete">Complete</option>
                    <option value="Cancelled">Cancelled</option>
                  </Form.Select>
                </td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Orders;
