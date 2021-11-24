import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';




const Details = () => {
 const [service,setService]=useState([]);
  const { detailsId } = useParams();
useEffect(()=>{
  fetch(`http://localhost:3001/details/${detailsId}`)
  .then(res=>res.json())
  .then(data=>setService(data));
},[]);

  return (
    <div>

      <h1 className="gum mt-5 mb-5 fw-bolder">Services Details {detailsId}</h1>
      <h3>{service.name}</h3>
      <img src={service.img} alt="" />

    </div>
  );
};

export default Details;