import React from 'react';
import dolar from '../../../data/dollar.png';
import euro from '../../../data/euro.png';
import bitcoin from '../../../data/bitcoin.png';
import ethereum from '../../../data/ethereum.png';
import './hiddenNav.css';

const HiddenNav = (props) => {
  const { product, handleClickDescription, handleClickSpecifications } = props;
  
  return (
    <div className="hidden-nav-home-page" id="navbar">
      <div className="product-details-nav">
        <img src={product.images[0].url} alt=""/>
        <div className="product-name-stuff-nav">
          <div className="product-page-title-hidden">{product.name}</div>
          <div className="nav-des-spec">
            <div
              onClick={handleClickDescription}
              style={{ cursor: 'pointer', fontWeight: '600' }}
            >
              Description
            </div>
            <div
              onClick={handleClickSpecifications}
              style={{ cursor: 'pointer', fontWeight: '600' }}
            >
              Reviews(0)
            </div>
          </div>
        </div>
      </div>
      <div className="product-button-price-nav">
        <div className="prices">
          <p className="category-price">
            <img src={dolar} alt="" /> {product.price * 1.05}
          </p>
          <p className="category-price">
            <img src={euro} alt="" /> {product.price}
          </p>
          <p className="category-price">
            <img src={bitcoin} alt="" /> {product.price * 0.000062}
          </p>
          <p className="category-price">
            <img src={ethereum} alt="" /> {product.price * 0.00083}
          </p>
        </div>
      </div>
      <button className="nav-button-addCart">Add To Cart</button>
    </div>
  );
};

export default HiddenNav;
