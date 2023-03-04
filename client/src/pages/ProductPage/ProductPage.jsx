import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsProduct } from '../../actions/productAction';
import ProductPageImages from '../../components/Product Details/Product Images/ProductPageImages';
import ProductDetails from '../../components/Product Details/ProductDetails';
// import ProductHiddenNav from '../../components/Hidden Navs/Product Hidden Nav/ProductHiddenNav';
import './productPage.css';

const ProductPage = (props) => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  // const handleClickSpecifications = () => {
  //   document.getElementById('3').scrollIntoView({ behavior: 'smooth' });
  //   setActive(3);
  // };

  // const handleClickDescription = () => {
  //   document.getElementById('0').scrollIntoView({ behavior: 'smooth' });
  //   setActive(0);
  //   console.log('descriere')
  // };

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);
  const detailedProduct = useSelector((state) => state.detailedProduct);
  const { loading, error, product } = detailedProduct;
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <div className="product-page">
          {/* <ProductHiddenNav
            product={product}
            handleClickSpecifications={handleClickSpecifications}
            handleClickDescription={handleClickDescription}
          /> */}
          <ProductPageImages product={product} />
          <ProductDetails
            product={product}
            active={active}
            setActive={setActive}
            ref={ref}
          />
        </div>
      )}
    </>
  );
};

export default ProductPage;
