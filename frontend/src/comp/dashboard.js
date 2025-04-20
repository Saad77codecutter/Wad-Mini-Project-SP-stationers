// src/comp/Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '240px',
        background: '#f8f9fa',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
      }}>
        <h4 className="fw-bold mb-4">Admin Panel</h4>
        <nav className="nav flex-column">
          <Link to="/dashboard" className="nav-link text-dark fw-semibold mb-2">Dashboard</Link>
          <Link to="/dashboard/products" className="nav-link text-dark fw-semibold mb-2">Products</Link>
          <Link to="/dashboard/orders" className="nav-link text-dark fw-semibold mb-2">Orders</Link>
          <Link to="/dashboard/users" className="nav-link text-dark fw-semibold mb-2">Users</Link>
          <Link to="/" className="nav-link text-dark fw-semibold mb-2">Home</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px' }}>
        <Outlet /> {/* This is where nested content will show */}
      </div>
    </div>
  );
};

export default Dashboard;
