
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {
  const { id, name, img, description } = service;


  return (
    <div className=" col-lg-4 col-md-6 col-12">
         <div className="service">
        <img className="w-75 mb-3" src={img} alt="" />
        <h5 className="text-primary fw-bolder ">{name}</h5>
        <p>{description}</p>
        <Link to={`/details/${id}`}>
        <button className="btn btn-warning fw-bolder mb-2">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;