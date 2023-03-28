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
  

  return (
    <>
      <MainAds />
      <HomeInfo />
      <DailyDeals />
      <TopCategories />
      <ThreeSetAds />
      <FeaturedProducts />
      <TwoSetAds />
      <ExclusiveProducts />
    </>
  );
};

export default HomePage;
