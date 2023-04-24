import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineShop } from 'react-icons/ai';
import {
  BsBoxSeam,
  BsCardHeading,
  BsFacebook,
  BsFileBarGraph,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { FaGooglePlus } from 'react-icons/fa';
import { RiBillLine } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import Review from '../Review';
import ProductSpecifications from './ProductSpecifications';
import euro from '../../data/euro.png';
import ad from '../../data/banner.jpg';
import { Content, Tab, Tabs } from './tab';
import './productDetails.css';
import {addItemShoppingBasket} from "../../reducers/cartReducer";
import {useDispatch} from "react-redux";

const ProductDetails = (props) => {
  const { product, active, ref, setActive } = props;
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <div className="product-page-details">
      <div className="product-data-details">
        <div className="product-detail">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-brand-rating">
            <div>Brand: Product Brand</div>
            <Rating />
          </div>
          <div className="prices">
            <p className="category-price">
              <img src={euro} alt="" /> {product.price}
            </p>
          </div>
          <div className="product-status">
            Status:
            <b className="greenColor">
              {product.Stock < 1 ? ' Out Of Stock' : ' In Stock'}
            </b>
          </div>
          <div className="product-soldBy">
            Sold By:
            {/* <Link to={`/seller/${product.seller._id}`}> // atunci cand se creeaza un produs trebuie sa arate si seller-ul
              {product.seller.seller.name} */}
              Seller Name
            {/* </Link> */}
          </div>
          <div className="product-quantity-buttons">
            <div className="buttons-product-page">
              <div className="quantity">
                <div className="quantity-font">Quantity</div>
                <div className="quantity-buttons">
                  <Button onClick={() => setQuantity(quantity === 0? 0 : quantity - 1)}
                    variant="light"
                    size="sm"
                  >
                    <i className="fas fa-minus-circle"></i>
                  </Button>{' '}
                  <b>{quantity}</b>{' '}
                  <Button onClick={() => setQuantity(quantity + 1)}
                    variant="light"
                    size="sm"
                  >
                    <i className="fas fa-plus-circle"></i>
                  </Button>
                </div>
              </div>
              <div className="cart-buy-buttons">
                <Button variant="dark" size="lg"
                onClick={() => dispatch(addItemShoppingBasket(product))}>
                  Add To Cart
                </Button>
                <Button variant="warning" size="lg">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="logo-favs-compare">
              <CiHeart className="third-logo" />
              <BsFileBarGraph className="third-logo" /> Compare
            </div>
          </div>
          <div className="product-special-details">
            <div>
              <b>SKU:</b> {product._id}{' '}
            </div>
            <div>
              <b>Categories:</b>{' '}
              <Link
                to={`/filters/mainCategory/${product.mainCategory}`}
                style={{ textDecoration: 'none', fontWeight: '600' }}
              >
                {addUpperSpace(product.mainCategory)}
              </Link>
            </div>
            <div>
              <b>Tags:</b>{' '}
              {product.subCategory !== undefined &&
                addUpperSpace(product.subCategory) + ', '}
              {addUpperSpace(product.category)}
              {product.model !== undefined && ', ' + product.model}
              {product.brand !== undefined && ', ' + product.brand}
            </div>
          </div>
          <div className="product-page-companies">
            <BsFacebook className="first-logo" />
            <BsTwitter className="first-logo" />
            <BsLinkedin className="first-logo" />
            <FaGooglePlus className="first-logo" />
            <BsPinterest className="first-logo" />
          </div>
        </div>
        <div className="ad-stuff">
          <div className="condition-stuff">
            <div className="first-condition">
              <TfiWorld className="first-logo" /> Shipping World{' '}
            </div>
            <div className="first-condition">
              <RiBillLine className="second-logo" /> Free 7-day return if
              eligible, so easy
            </div>
            <div className="first-condition">
              <BsBoxSeam className="second-logo" /> Supplier give bills for this
              product
            </div>
            <div className="first-condition">
              <BsCardHeading className="second-logo" /> Pay online or when
              receiving goods
            </div>
          </div>
          <div className="sell-metaQuantum">
            <span>
              <AiOutlineShop className="first-logo"></AiOutlineShop> Want to sell with us?{' '}
              <Link
                to={`/signin`}
                style={{ textDecoration: 'none', fontWeight: '600' }}
              >
                <bold>Register Now!</bold>
              </Link>
            </span>
          </div>
          <img className="ad-product-page" src={ad} alt="" />
        </div>
      </div>
      <div className="tabs-detail-product">
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0} ref={ref}>
            Description
          </Tab>
          <Tab onClick={handleClick} active={active === 1} id={1}>
            Specifications
          </Tab>
          <Tab onClick={handleClick} active={active === 2} id={2}>
            Vendor
          </Tab>
          <Tab onClick={handleClick} active={active === 3} id={3} ref={ref}>
            Reviews (0)
          </Tab>
          <Tab onClick={handleClick} active={active === 4} id={4}>
            Questions and Answers
          </Tab>
        </Tabs>
        <>
          <Content active={active === 0}>
            <div className="product-description">
              <div className="tab-title">Description</div>
              <p className="product-description-width">{product.description}</p>
            </div>
          </Content>
          <Content active={active === 1}>
            <div className="spec-tab">
              <div className="tab-title">Specifications</div>
              <ProductSpecifications product={product} />
            </div>
          </Content>
          <Content active={active === 2}>
            <div className="vendor-tab">
              <div className="tab-title"> Seller name</div>
              <div>
                <p>Seller details</p>
                <b>See more products from the Seller</b>
              </div>
            </div>
          </Content>
          <Content active={active === 3}>
            <div className="review-tab">
              <div className="tab-title">Reviews</div>
              <div>
                {' '}
                <Review product={product} />
              </div>
            </div>
          </Content>
          <Content active={active === 4}>
            <div className="questions-answers">
              <div className="tab-title">Questions and Answers</div>
              <form>
                <input
                  type="text"
                  placeholder="Have a question? Search for answer"
                  className="question-answer-input"
                />
              </form>
              <p>You are not logged in</p>
            </div>
          </Content>
          <div className="ad-stuff-querry">
            <div className="condition-stuff">
              <div className="first-condition">
                <TfiWorld className="first-logo" /> Shipping World{' '}
              </div>
              <div className="first-condition">
                <RiBillLine className="second-logo" /> Free 7-day return if
                eligible, so easy
              </div>
              <div className="first-condition">
                <BsBoxSeam className="second-logo" /> Supplier give bills for
                this product
              </div>
              <div className="first-condition">
                <BsCardHeading className="second-logo" /> Pay online or when
                receiving goods
              </div>
            </div>
            <div>
              <div className="sell-metaQuantum">
                <span>
                  <AiOutlineShop className="first-logo"></AiOutlineShop> Want to sell with us?{' '}
                  <Link
                    to={`/signin`}
                    style={{ textDecoration: 'none', fontWeight: '600' }}
                  >
                    <bold>Register Now!</bold>
                  </Link>
                </span>
              </div>
              <img className="ad-product-page" src={ad} alt="" />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ProductDetails;
