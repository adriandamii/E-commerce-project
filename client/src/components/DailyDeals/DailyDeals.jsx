import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './dailyDeals.css';
import Product from '../Product/Product'


const DailyDeals = () => {
  const [dailyDealsArr, setDailyDealsArr] = useState([]);

  useEffect(() => {
    const getPostsData = () => {
      axios
        .get('products/dailyDeals')
        .then((response) => setDailyDealsArr(response.data))
        .catch((error) => console.log(error));
    };
    getPostsData();
  }, []);
  return (
    <div className='daily-deals'>
      <h4>Daily deals</h4> 
      {/* <div className="product-list">
        {dailyDealsArr.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div> */}
    </div>
  )
}

export default DailyDeals
