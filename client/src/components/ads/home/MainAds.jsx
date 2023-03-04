import React from 'react';
import img1 from '../../../data/homePage images/img1.jpg';
import img2 from '../../../data/homePage images/img2.jpg';
import img3 from '../../../data/homePage images/img3.jpg';
import img4 from '../../../data/homePage images/img4.jpg';

// import HomeHiddenNav from '../../Hidden Navs/Home Hidden Nav/HomeHiddenNav';
import HomeSlideShow from './HomeSlideShow';
import './home.css';

const ads = [img1, img2, img3, img4,];

const MainAds = () => {
  return (
    <div className="all-publicity">
      {/* <HomeHiddenNav /> */}
      <HomeSlideShow ads={ads} />
      <div className="small-publicity">
        <div>
          <img src={img2} alt="" className="home-small-ad" />
        </div>
        <div>
          <img src={img4} alt="" className="home-small-ad" />
        </div>
      </div>
    </div>
  );
};

export default MainAds;
