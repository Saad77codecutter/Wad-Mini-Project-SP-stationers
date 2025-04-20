import { Card, Carousel } from 'react-bootstrap';
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

    return (
        <>
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

            <br /> <br />
            <center>
                {/* Stationery */}
                <Card
                    border="warning"
                    className="card"
                    onClick={() => { scrollToTop(); navigate('/stationery'); }}
                    style={{ width: '18rem', display: "inline-block", margin: 5, cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>Stationery</Card.Title>
                        <Card.Img variant="top" src={stationery} />
                    </Card.Body>
                </Card>

                {/* Electronics */}
                <Card
                    border="warning"
                    className="card"
                    onClick={() => { scrollToTop(); navigate('/electronic'); }}
                    style={{ width: '18rem', display: "inline-block", margin: 5, cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>Electronics</Card.Title>
                        <Card.Img variant="top" src={electronic} />
                    </Card.Body>
                </Card>

                {/* Paper */}
                <Card
                    border="warning"
                    className="card"
                    onClick={() => { scrollToTop(); navigate('/paper'); }}
                    style={{ width: '18rem', display: "inline-block", margin: 5, cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>Paper & Products</Card.Title>
                        <Card.Img variant="top" src={paper} />
                    </Card.Body>
                </Card>

                {/* Filing */}
                <Card
                    border="warning"
                    className="card"
                    onClick={() => { scrollToTop(); navigate('/filing'); }}
                    style={{ width: '18rem', display: "inline-block", margin: 5, cursor: 'pointer' }}
                >
                    <Card.Body>
                        <Card.Title>Filing & Storage</Card.Title>
                        <Card.Img variant="top" src={filing} />
                    </Card.Body>
                </Card>
            </center>

            <br /> <br />

            <Routes>
                <Route exact path='/electronic' element={<Electronic />} />
                
                <Route exact path='/filing' element={<Filing />} />
                <Route exact path='/stationery' element={<Stationery />} />
            </Routes>
        </>
    );
}
