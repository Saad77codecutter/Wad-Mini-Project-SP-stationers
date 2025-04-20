import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Branches() {
  const branch = {
    title: "SP Stationers",
    address: "Chandrabhaga Nagar, Katraj, Pune, Maharashtra",
    phone: "012-3456789",
    mobile: "098-7654321",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    closed: "Sat-Sun: Closed",
    googleMapsLink: "https://maps.app.goo.gl/GkpNcTTuPPiwrWBY9"
  };

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <h5>{branch.title}</h5>
          <p>{branch.address}</p>
          <p>Phone: {branch.phone}</p>
          <p>Mobile: {branch.mobile}</p>
          <p>Hours: {branch.hours}</p>
          <p>{branch.closed}</p>

          {/* Embedded Google Map */}
          <div style={{ width: '100%', height: '450px', marginTop: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.96893564637!2d73.852682528723!3d18.457161294129662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac889901995%3A0xfe640fe0c904b3ad!2sS.P.%20Stationers%2C%20Chandrabhaga%20Nagar%2C%20Katraj%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745073282481!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SP Stationers Location"
            ></iframe>
          </div>

          {/* View on Google Maps link */}
          <p style={{ marginTop: '10px' }}>
            <a
              href={branch.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff', textDecoration: 'underline' }}
            >
              View on Google Maps
            </a>
          </p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
