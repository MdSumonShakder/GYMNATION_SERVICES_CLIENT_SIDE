import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';


const Details = () => {
  const {id}=useParams();
  const [details,setDetails]=useState([]);
  
  useEffect(()=>{
    fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setDetails(data));
  },[]);



  return (
    <div>
     <div className="container mb-5 mt-5">
      <div className="container">
        <div className="row">
          <h1 className="gum mb-5 fw-bolder">Services Details</h1>
          {
            details?.find(detail => <Detail

              key={detail.id}
              detail={detail}

            ></Detail>)
          }

        </div>

      </div>
    </div>
     
    </div>
  );
};

export default Details;