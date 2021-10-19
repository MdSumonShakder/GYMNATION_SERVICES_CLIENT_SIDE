import React from 'react';
import { Card, ListGroup, ListGroupItem, Nav } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import fast from '../../images/banner-1.png'
import secind from '../../images/banner-2.png'
import third from '../../images/banner-3.png'
import './Pricing.css';



const Pricing = () => {
  return (
    <>
    <div className="container">
    <div className="price">
      <div className="cad m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fast} />
          <Card.Body className="bg-info">
            <Card.Title className=" text-secondary fw-bold">BASIC</Card.Title>
            <p className="fw-bold">Great For Small Business</p>
            <h1 className="text-danger fw-bolder">$65p.m.</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Aerobics</ListGroupItem>
            <ListGroupItem>Yoga</ListGroupItem>
            <ListGroupItem>Steam Bath</ListGroupItem>
            <ListGroupItem>Free Parking</ListGroupItem>
            <ListGroupItem>Weight Training</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Nav to="/home">
           <button className="btn btn-warning  mx-auto fw-bolder">Join Now</button>
           </Nav>
          </Card.Body>
        </Card>
      </div>
      <div className="cad m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={secind} />
          <Card.Body className="bg-info">
            <Card.Title className=" text-secondary fw-bold">PROFESSIONAL</Card.Title>
            <p className="fw-bold">Great For Small Business</p>
            <h1 className="text-danger fw-bolder">$75p.m.</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Aerobics</ListGroupItem>
            <ListGroupItem>Yoga</ListGroupItem>
            <ListGroupItem>Steam Bath</ListGroupItem>
            <ListGroupItem>Free Parking</ListGroupItem>
            <ListGroupItem>Weight Training</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Nav to="/">
           <button className="btn btn-warning  mx-auto fw-bolder">Join Now</button>
           </Nav>
          </Card.Body>
        </Card>
      </div>
      <div className="cad m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={third} />
          <Card.Body className="bg-info">
            <Card.Title className=" text-secondary fw-bold">PREMIUM</Card.Title>
            <p className="fw-bold">Great For Small Business</p>
            <h1 className="text-danger fw-bolder">$85p.m.</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Aerobics</ListGroupItem>
            <ListGroupItem>Yoga</ListGroupItem>
            <ListGroupItem>Steam Bath</ListGroupItem>
            <ListGroupItem>Free Parking</ListGroupItem>
            <ListGroupItem>Weight Training</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Nav to="/">
           <button className="btn btn-warning  mx-auto fw-bolder">Join Now</button>
           </Nav>
          </Card.Body>
        </Card>
      </div>
      <div className="cad m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fast} />
          <Card.Body className="bg-info">
            <Card.Title className=" text-secondary fw-bold">ULTIMATE</Card.Title>
            <p className="fw-bold">Great For Small Business</p>
            <h1 className="text-danger fw-bolder">$100p.m.</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Aerobics</ListGroupItem>
            <ListGroupItem>Yoga</ListGroupItem>
            <ListGroupItem>Steam Bath</ListGroupItem>
            <ListGroupItem>Free Parking</ListGroupItem>
            <ListGroupItem>Weight Training</ListGroupItem>
          </ListGroup>
          <Card.Body>
           <Nav to="/">
           <button className="btn btn-warning mx-auto fw-bolder">Join Now</button>
           </Nav>
          </Card.Body>
        </Card>
      </div>
   
    </div>
    
    </div>
    <Footer></Footer>
    </>
  );
};

export default Pricing;