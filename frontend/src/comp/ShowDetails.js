import React, { useState, useEffect } from 'react';
import { Modal, Button, Badge, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartActions";

export default function ShowDetails({ show, onHide, products }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  useEffect(() => {
    if (show) {
      setQty(1);
      setCurrentImageIndex(0);
    }
  }, [show]);

  const handleAddToCart = () => {
    const itemToAdd = {
      ...products,
      code: products._id || products.code,
      product_image: products.product_image || products.images?.[0],
      qty: qty,
    };
    dispatch(addToCart(itemToAdd));
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  if (!products || Object.keys(products).length === 0) return null;

  const {
    name, category, brand, price, price_range, color, material,
    available, quantity, rating, dimensions, discount, features,
    supplier, tags, images, date_added, description
  } = products;

  const hasMultipleImages = images && images.length > 1;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          {/* Image Column */}
          <Col md={5} className="text-center mb-3">
            {hasMultipleImages ? (
              <div>
                <img
                  src={`Image/${images[currentImageIndex]}`}
                  alt={`Slide ${currentImageIndex}`}
                  style={{ maxWidth: '100%', borderRadius: '12px', objectFit: 'cover', marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleImageClick(currentImageIndex)}
                />
                <div className="d-flex justify-content-center gap-2">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={`Image/${img}`}
                      alt={`Thumbnail ${idx}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: 'cover',
                        borderRadius: '5px',
                        border: currentImageIndex === idx ? '2px solid #F5D43E' : '1px solid #ccc',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <img
                src={products.product_image || `Image/${images?.[0]}`}
                alt={name}
                style={{ maxWidth: '100%', borderRadius: '12px', objectFit: 'cover' }}
              />
            )}
          </Col>

          {/* Info Column */}
          <Col md={7}>
            <h5 className="mb-3 text-muted">{brand} | {category}</h5>
            <div className="mb-2">
              <span className="h4 text-success">₹{price}</span>{" "}
              {discount?.active && <Badge bg="success" className="ms-2">-{discount.percentage}% OFF</Badge>}
              <div className="text-muted">Price Range: {price_range}</div>
            </div>

            {rating && (
              <div className="mb-2">
                <strong>Rating:</strong>{" "}
                <span className="text-warning">{rating.average} ⭐</span>{" "}
                <span className="text-muted">({rating.reviews_count} reviews)</span>
              </div>
            )}

            <div className="mb-2"><strong>Color:</strong> {color}</div>
            <div className="mb-2"><strong>Material:</strong> {material}</div>

            <div className="mb-2">
              <strong>Status:</strong>{" "}
              {available ? <Badge bg="primary">In Stock</Badge> : <Badge bg="danger">Out of Stock</Badge>}
            </div>

            <div className="mb-3"><strong>Quantity Available:</strong> {quantity}</div>

            {discount?.active && (
              <div className="mb-3 text-danger">
                <strong>Discount valid till:</strong> {new Date(discount.valid_till).toLocaleDateString()}
              </div>
            )}

            <div className="d-flex align-items-center mb-3">
              <Button variant="outline-secondary" onClick={() => setQty(Math.max(1, qty - 1))}>-</Button>
              <span className="mx-3">{qty}</span>
              <Button variant="outline-secondary" onClick={() => setQty(qty + 1)}>+</Button>
            </div>

            <Button variant="warning" className="w-100" onClick={handleAddToCart}>
              Add {qty} to Cart
            </Button>
          </Col>
        </Row>

        <hr />

        <div className="mb-3">
          <h5>Description</h5>
          <p className="text-muted">{description}</p>
        </div>

        {features?.length > 0 && (
          <div className="mb-3">
            <h5>Key Features</h5>
            <ul>
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {dimensions && (
          <div className="mb-3">
            <h5>Dimensions</h5>
            <p className="text-muted">
              Height: {dimensions.height} cm | Width: {dimensions.width} cm | Depth: {dimensions.depth} cm
            </p>
          </div>
        )}

        {supplier && (
          <div className="mb-3">
            <h5>Supplier Info</h5>
            <ul className="text-muted">
              <li><strong>Name:</strong> {supplier.name}</li>
              <li><strong>Contact:</strong> {supplier.contact}</li>
              <li><strong>Location:</strong> {supplier.location}</li>
            </ul>
          </div>
        )}

        {tags?.length > 0 && (
          <div className="mb-3">
            <h5>Tags</h5>
            <div>
              {tags.map((tag, i) => (
                <Badge key={i} bg="secondary" className="me-1">{tag}</Badge>
              ))}
            </div>
          </div>
        )}

        <div className="text-muted">
          <small>Added on: {new Date(date_added).toLocaleString()}</small>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>

      {/* Image Lightbox Modal */}
      <Modal show={isImageModalOpen} onHide={closeImageModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name} - Image</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={`Image/${images[currentImageIndex]}`}
            alt={`Full view ${currentImageIndex}`}
            style={{ maxWidth: '100%', borderRadius: '12px', objectFit: 'contain' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={closeImageModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Modal>
  );
}
