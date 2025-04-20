import { Card, Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import img1 from '../Image/img1.jpg';
import img2 from '../Image/img2.jpg';
import img3 from '../Image/img3.jpg';

import paper from '../Image/paper1.png';
import electronic from '../Image/Elec.png';
import filing from '../Image/filing.png';
import stationery from '../Image/Pen.png';

import Electronic from './Electronic';
import Filing from './Filing';
import Stationery from './Stationery';

import '../css/Home.css';

export default function Home() {
   const navigate = useNavigate();

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const handleNavigate = (path) => {
      scrollToTop();
      navigate(path);
   };

   return (
      <>
         {/* Carousel */}
         <Carousel>
            <Carousel.Item>
               <img src={img1} alt="Slide 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
               <img src={img2} alt="Slide 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
               <img src={img3} alt="Slide 3" className="d-block w-100" />
            </Carousel.Item>
         </Carousel>

         <br />

         {/* Categories */}
         <Container className="text-center my-4">
            <h2 className="mb-4">Shop by Categories</h2>
            <Row className="justify-content-center">
               <Col xs={12} md={6} lg={3}>
                  <Card border="warning" className="mb-3 category-card" onClick={() => handleNavigate('/stationery')} style={{ cursor: 'pointer' }}>
                     <Card.Img variant="top" src={stationery} />
                     <Card.Body>
                        <Card.Title>Stationery</Card.Title>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xs={12} md={6} lg={3}>
                  <Card border="warning" className="mb-3 category-card" onClick={() => handleNavigate('/electronic')} style={{ cursor: 'pointer' }}>
                     <Card.Img variant="top" src={electronic} />
                     <Card.Body>
                        <Card.Title>Gifts</Card.Title>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xs={12} md={6} lg={3}>
                  <Card border="warning" className="mb-3 category-card" onClick={() => handleNavigate('/stationery')} style={{ cursor: 'pointer' }}>
                     <Card.Img variant="top" src={paper} />
                     <Card.Body>
                        <Card.Title>Paper Products</Card.Title>
                     </Card.Body>
                  </Card>
               </Col>
               <Col xs={12} md={6} lg={3}>
                  <Card border="warning" className="mb-3 category-card" onClick={() => handleNavigate('/stationery')} style={{ cursor: 'pointer' }}>
                     <Card.Img variant="top" src={filing} />
                     <Card.Body>
                        <Card.Title>Filing & Storage</Card.Title>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>

         {/* About Section */}
         <Container className="my-5 text-center">
            <h3>About Us</h3>
            <p style={{ maxWidth: '800px', margin: 'auto' }}>
               Welcome to our store! We provide high-quality stationery, electronics, paper goods, and filing supplies for individuals, students, and businesses.
               Our products are handpicked to ensure the best combination of quality and value.
            </p>
         </Container>

         {/* Why Choose Us */}
         <Container className="my-5 text-center bg-light p-4 rounded">
            <h3>Why Choose Us?</h3>
            <Row className="mt-4">
               <Col md={4}>
                  <h5>✔️ Quality Products</h5>
                  <p>We never compromise on quality. All items are tested and approved by experts.</p>
               </Col>
               <Col md={4}>
                  <h5>🚚 Fast Delivery</h5>
                  <p>Get your orders delivered at lightning speed with our express delivery service.</p>
               </Col>
               <Col md={4}>
                  <h5>💳 Secure Payments</h5>
                  <p>We offer secure and flexible payment options for a smooth shopping experience.</p>
               </Col>
            </Row>
         </Container>

         {/* Call to Action */}
         <Container className="text-center my-5">
            <h4>Ready to Shop?</h4>
            <Button variant="primary" size="lg" onClick={() => handleNavigate('/stationery')}>Explore Products</Button>
         </Container>

        
      </>
   );
}
