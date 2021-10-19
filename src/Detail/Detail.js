import React from 'react';

const Detail = ({detail}) => {
  const {img,name,description}= detail;
  
  return (
    <div>
       <div className="col-12">
        <img className="w-75 mb-3" src={img} alt="" />
        <h5 className="text-primary fw-bolder ">{name}</h5>
        <p>{description}</p>
       
      
    </div>
    </div>
  );
};

export default Detail;