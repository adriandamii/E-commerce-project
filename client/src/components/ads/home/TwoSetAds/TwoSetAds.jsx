import React from 'react'
import first from '../../../../data/adsTwo/first.png';
import second from '../../../../data/adsTwo/second.png';
import './twoSetAds.css';


const TwoSetAds = () => {
  return (
    <div className='two-set-ads'>
      <div className='two-ads'><img src={first} alt=''/></div>
      <div className='two-ads'><img src={second} alt=''/></div>

    </div>
  )
}

export default TwoSetAds;
