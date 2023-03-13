import React from 'react';
import laptop from '../../data/mainCategories/laptop.png';
import kitchen from '../../data/mainCategories/kitchen.png';
import whatch from '../../data/mainCategories/whatch.png';
import beauty from '../../data/mainCategories/beauty.png';
import technologyToy from '../../data/mainCategories/technologyToy.png';
import electronic from '../../data/mainCategories/electronic.png';
import fashion from '../../data/mainCategories/fashion.png';
import phone from '../../data/mainCategories/phone.png';
import './topCategories.css';
import { Link } from 'react-router-dom';
const TopCategories = () => {
  return (
    <div className="top-categories">
      <label>
        Top Categories
        <div className="categories">
          <div className="category-home electronics-margin">
            <Link to={`/filters/mainCategory/electronicsAppliances/category/TV/subCategory/TV`} style={{color:'grey'}}>
              <img src={electronic} alt="" /> <p>Electronics</p>
            </Link>
          </div>
          <div className="category-home">
            <Link to={`/filters/mainCategory/fashion`} style={{color:'grey'}}>
              <img src={fashion} alt="" /> <p>Clothing</p>
            </Link>
          </div>
          <div className="category-home laptop-margin">
            <Link to={`/filters/mainCategory/electronicsAppliances/category/laptopPcGaming/subCategory/laptop`} style={{color:'grey'}}>
              <img src={laptop} alt="" /> <p>Laptops</p>
            </Link>
          </div>
          <div className="category-home">
            <Link to={`/filters/mainCategory/houseAndGarden/category/furnitureDecorations/subCategory/kitchen`} style={{color:'grey'}}>
              <img src={kitchen} alt="" /> <p>Home & Kitchen</p>
            </Link>
          </div>
          <div className="category-home beauty-margin">
            <Link to={`/filters/mainCategory/servicesCompanyEquipment/category/beautyServices`} style={{color:'grey'}}>
              <img src={beauty} alt="" /> <p>Beauty & Health</p>
            </Link>
          </div>
          <div className="category-home">
            <Link to={`/filters/mainCategory/fashion/category/watches`} style={{color:'grey'}}>
              <img src={whatch} alt="" /> <p>Whatches</p>
            </Link>
          </div>
          <div className="category-home toys-margin">
            <Link to={`/filters/mainCategory/electronicsAppliances`} style={{color:'grey'}}>
              <img src={technologyToy} alt="" /> <p>Technology Toys</p>
            </Link>
          </div>
          <div className="category-home">
            <Link to={`/filters/mainCategory/electronicsAppliances/category/phones`} style={{color:'grey'}}>
              <img src={phone} alt="" /> <p>Phones</p>
            </Link>
          </div>
        </div>
      </label>
    </div>
  );
};

export default TopCategories;
