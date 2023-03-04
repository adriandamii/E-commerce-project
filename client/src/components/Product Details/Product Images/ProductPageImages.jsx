import React from 'react';
import { useState, useRef } from 'react';
import { AiOutlineShop } from 'react-icons/ai';
import { BsBoxSeam, BsCardHeading } from 'react-icons/bs';
import { RiBillLine } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import ad from '../../../data/banner.jpg';
import './productPage.css';

export default function ProductPageSlideShow(props) {
  const { product } = props;
  const [img, setImg] = useState(product.images[0]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add('active');
    for (var j = 0; j < product.images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove('active');
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  const handleImageSize = (e) => {
    setWidth(e.target.naturalWidth);
    setHeight(e.target.naturalHeight);
  };

  return (
    <div className="left">
      <div className="left_1">
        {product.images.map((image, i) => (
          <div
            className={i === 0 ? 'img_wrap active' : 'img_wrap'}
            key={i}
            onMouseOver={() => hoverHandler(image, i)}
            ref={addRefs}
          >
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
      <div className="left_2">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: '',
              isFluidWidth: true,
              src: img.url,
              onLoad: handleImageSize,
            },
            largeImage: {
              src: img.url,
              width: width,
              height: height,
            },
            enlargedImageContainerDimensions: {
              width: '165%',
              height: '165%',
            },
          }}
        />
        <div className="ad-stuff-under-images">
          <div className="condition-stuff">
            <div className="first-condition">
              <TfiWorld className="second-logo" /> Shipping World{' '}
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
          <div className="sell-with-us">
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
    </div>
  );
}
