import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import one1 from '../../images/pic-1.jpg';
import one2 from '../../images/pic-2.jpg';
import one3 from '../../images/pic-3.jpg';
import one4 from '../../images/pic-4.jpg';
import one5 from '../../images/pic-5.jpg';
import one6 from '../../images/pic-6.jpg';
import one7 from '../../images/pic-7.jpg';
import one8 from '../../images/pic-8.jpg';
import one9 from '../../images/pic-9.jpg';



const Gallery = () => {
  return (
    <>
      <div className="container mb-5 ">
        <h1 className="gum mb-5 fw-bolder">Our Gallery</h1>
        <Carousel fade>
        <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one1}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one2}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one3}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one4}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one5}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one6}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one7}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one8}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-50"
              src={one9}
              alt="First slide"/>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Gallery;