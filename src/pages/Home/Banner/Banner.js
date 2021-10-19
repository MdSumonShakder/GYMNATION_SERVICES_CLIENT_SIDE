import React from 'react';
import { Carousel } from 'react-bootstrap';
import fast from '../../../images/banner-1.png';
import second from '../../../images/banner-2.png';
import third from '../../../images/banner-3.png';

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fast}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Exercise and stay healthy</h3>
            <p className="text-warning fw-bolder">In congue lorem dignissim leo lacinia efficitur  nam suscipit  viverra vel <br />cras cursus porta porttitor.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Exercise and stay healthy</h3>
            <p  className="text-primary fw-bolder">Get special  newsletter to get free updates training this summer 50% off pay now.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ third}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-light fw-bolder">Exercise and stay healthy</h3>
            <p  className="text-info fw-bolder">Subscribe our newsletter to get free updates Get special  newsletter to get
.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;