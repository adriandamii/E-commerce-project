import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MainAds from '../components/ads/home/MainAds';
import ThreeSetAds from '../components/ads/home/ThreeSetAds/ThreeSetAds';
import TwoSetAds from '../components/ads/home/TwoSetAds/TwoSetAds';
import DailyDeals from '../components/DailyDeals/DailyDeals';
import ExclusiveProducts from '../components/ExclusiveProducts/ExclusiveProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HomeInfo from '../components/HomeInfo/HomeInfo';
import Product from '../components/Product/Product';
import TopCategories from '../components/TopCategories/TopCategories';

const HomePage = () => {
  const [dailyDealsArr, setDailyDealsArr] = useState([]);
  const [featuredArr, setFeaturedArr] = useState([]);
  const [exclusiveArr, setExclusiveArr] = useState([]);

  useEffect(() => {
    const getPostsData = () => {
      axios
        .get('products/dailyDeals')
        .then((response) => setDailyDealsArr(response.data))
        .catch((error) => console.log(error));

      axios
        .get('products/featured')
        .then((response) => setFeaturedArr(response.data))
        .catch((error) => console.log(error));

      axios
        .get('products/exclusive')
        .then((response) => setExclusiveArr(response.data))
        .catch((error) => console.log(error));
    };
    getPostsData();
  }, []);

  return (
    <>
      <MainAds />
      <HomeInfo />
      <DailyDeals />

      <div className="product-list">
        {dailyDealsArr.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <TopCategories />
      <ThreeSetAds />
      <FeaturedProducts />
      <div className="product-list">
        {featuredArr.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <TwoSetAds />
      <ExclusiveProducts />
      <div className="product-list">
        {exclusiveArr.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
