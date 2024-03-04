import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/Group 3.png';
import Image2 from '../../assets/Group 4.png';
import Image3 from '../../assets/Group 5.png';
import './Carousel.css';

function CarouSel() {
    return (
        <div id="testimonials" className="carousel-container">
            <h2 className="testimonials-heading">Testimonials</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouSel;
