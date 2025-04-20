import { useState } from "react";
import { Form, Nav, Button, InputGroup } from "react-bootstrap";
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import axios from 'axios';
import '../css/Footer.css';

export default function Footer() {

    const [email, setEmail] = useState('');

    const handleClick = () => {
        axios.post('/send-email', { email }).then(() => {
            console.log("Email sent successfully!");
        }).catch(() => {
            console.log("Email not sent successfully!");
        });
    };

    return (
        <>
            <div style={{ backgroundColor: "#F5D43E" }}>
                <br /><br /><br />
                <center>
                    <h3><b>Want to stay updated?</b></h3><br />
                    <h4>Join our newsletter</h4><br />
                    <InputGroup className="mb-3" style={{ width: '40%' }}>
                        <Button
                            variant="outline-secondary"
                            id="button-addon1"
                            style={{ backgroundColor: 'black', color: 'white' }}
                            onClick={handleClick}
                        >
                            Subscribe
                        </Button>
                        <Form.Control
                            placeholder="Your email address"
                            aria-label="Email input"
                            aria-describedby="basic-addon1"
                            style={{ textAlign: "left" }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputGroup>
                </center>
                <br /><br /><br />
            </div>

            <div>
                <center>
                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>Customer Service</b></Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://hannan.co.il/pages/%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D-%D7%95%D7%94%D7%97%D7%96%D7%A8%D7%95%D7%AA"
                            target="_blank"
                        >Shipping & Returns</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://hannan.co.il/pages/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F-%D7%A9%D7%99%D7%9E%D7%95%D7%A9-%D7%91%D7%90%D7%AA%D7%A8"
                            target="_blank"
                        >Terms of Use</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://hannan.co.il/pages/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8"
                            target="_blank"
                        >Contact Us</Nav.Link>
                        <Nav.Link>About Us</Nav.Link>
                    </div>

                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>Follow Us</b></Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://www.instagram.com/hannand2018/"
                            target="_blank"
                        >
                            <AiFillInstagram /> Instagram
                        </Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="https://www.facebook.com/%D7%97%D7%A0%D7%9F-%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99-%D7%9B%D7%AA%D7%99%D7%91%D7%94-149160448977812/"
                            target="_blank"
                        >
                            <AiFillFacebook /> Facebook
                        </Nav.Link>
                    </div>

                    <div style={{ display: 'inline-block', margin: '5%' }}>
                        <Nav.Link><b>Stay in Touch</b></Nav.Link>
                        <Nav.Link>Phone: 972-2-5357425</Nav.Link>
                        <Nav.Link>Fax: 972-2-6366217</Nav.Link>
                        <Nav.Link
                            className='footer-link'
                            href="mailto:hanan.project.exe@gmail.com"
                        >
                            hanan.project.exe@gmail.com
                        </Nav.Link>
                        <Nav.Link>P.O. Box 548, Ma'ale Adumim 98100</Nav.Link>
                    </div>
                </center>
            </div>
        </>
    );
}
