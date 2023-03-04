import React from 'react';
import { BsCreditCard2Front } from 'react-icons/bs';
import { CiGift } from 'react-icons/ci';
import { FiRefreshCcw } from 'react-icons/fi';
import { SlRocket } from 'react-icons/sl';
import { TiMessages } from 'react-icons/ti';
import './homeInfo.css';

const HomeInfo = () => {
  return (
    <div className="homepage-information-container">
      <div className="homepage-information">
        <div className="home-delivery">
          <SlRocket className="homepage-icon" />
          <div className="bold-application">Free Delivery</div>
          <div className="font-adjust">For all orders over 99$</div>
        </div>
        <div className="days-retur">
          <FiRefreshCcw className="homepage-icon" />
          <div className="bold-application">90 Days Return</div>
          <div className="font-adjust">If goods have problems</div>
        </div>
        <div className="secure-payment">
          <BsCreditCard2Front className="homepage-icon" />
          <div className="bold-application">Secure Payment</div>
          <div className="font-adjust">100% secure payment</div>
        </div>
        <div className="homepage-suport">
          <TiMessages className="homepage-icon" />
          <div className="bold-application">24/7 Support</div>
          <div className="font-adjust">Dedicated support</div>
        </div>
        <div className="gift-service">
          <CiGift className="gift-icon" />
          <div className="bold-application">Gift Service</div>
          <div className="font-adjust">Support gift service</div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
