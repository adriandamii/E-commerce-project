import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status" className='spinner-loading'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
