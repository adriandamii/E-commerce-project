import React from 'react';
import './threeSetAds.css';
import first from '../../../../data/adsThree/first.png';
import second from '../../../../data/adsThree/second.png';
import third from '../../../../data/adsThree/third.png';



const ThreeSetAds = () => {
  return (
    <div className="three-set-ads">
      <div className="three-ads"><img src={first} alt=''/></div>
      <div className="three-ads"><img src={second} alt=''/></div>
      <div className="three-ads"><img src={third} alt=''/></div>
    </div>
  );
};

export default ThreeSetAds;
