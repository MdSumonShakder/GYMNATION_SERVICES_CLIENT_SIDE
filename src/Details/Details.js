import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';




const Details = () => {
 const [service,setService]=useState([]);
  const { detailsId } = useParams();
useEffect(()=>{
  fetch(`http://localhost:3001/details/${detailsId}`)
  .then(res=>res.json())
  .then(service=>setService(service));
},[detailsId]);

  return (
    <div>

      <h1 className="gum mt-5 mb-5 fw-bolder">Services Details {detailsId}</h1>
      <h1>{service.name}</h1>
     

    </div>
  );
};

export default Details;