import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
  const {detailsId}=useParams();
  return (
    <div>
      <h3>This is Details:{detailsId}</h3>
    </div>
  );
};

export default Details;