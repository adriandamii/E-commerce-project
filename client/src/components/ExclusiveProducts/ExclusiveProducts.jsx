import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Product from '../Product/Product';
import './exclusiveProducts.css';


const ExclusiveProducts = () => {
  const [exclusiveArr, setExclusiveArr] = useState([]);

  useEffect(() => {
    const getPostsData = () => {
      axios
        .get('products/exclusive')
        .then((response) => setExclusiveArr(response.data))
        .catch((error) => console.log(error));
    };
    getPostsData();
  }, []);
  return (
    <div className='exclusive-products'>
     <h4>Exclusive Products</h4>
     <div className="product-list">
        {exclusiveArr.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ExclusiveProducts
