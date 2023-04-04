import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import './featuredProducts.css';

const FeaturedProducts = () => {
  const [featuredArr, setFeaturedArr] = useState([]);

  useEffect(() => {
    const getPostsData = () => {
      axios
        .get('products/featured')
        .then((response) => setFeaturedArr(response.data))
        .catch((error) => console.log(error));
    };
    getPostsData();
  }, []);
  return (
    <div className="featured-products">
      <h4>Featured Products</h4>
      {/* <div className="product-list">
        {featuredArr.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div> */}
    </div>
  );
};

export default FeaturedProducts;
