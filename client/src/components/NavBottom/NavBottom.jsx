import { BiCategory } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingBasket } from 'react-icons/ci';
import { AiOutlineMenu } from 'react-icons/ai';
import './navBottom.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBottom = (props) => {
  const {setIsPressed} = props;

  const handlePress = () => {
    setIsPressed(true);
  };
  
  return (
    <div className="nav-bottom">
      <Link
        to={`/menuPages`}
        style={{ color: 'grey', textDecoration: 'none' }}
        className="tab-bottom-style"
      >
        <div className="home-nav-bottom">
          <AiOutlineMenu style={{ width: '30px', height: '30px' }} />
          <div>Menu</div>
        </div>
      </Link>
      <Link
        to={`/category`}
        style={{ color: 'grey', textDecoration: 'none' }}
        className="tab-bottom-style"
      >
        <div className="categories-nav-bottom">
          <BiCategory style={{ width: '30px', height: '30px' }} />
          <div>Categories</div>
        </div>
      </Link>
      {/* <Link
        to={`/search`}
        style={{ color: 'grey', textDecoration: 'none' }}
        className="tab-bottom-style"
      >
        <div className="search-nav-bottom">
          <CiSearch style={{ width: '40px', height: '40px' }} />
          <div>Search</div>
        </div>
      </Link> */}
      <Link
        to={`/cart`}
        style={{ color: 'grey', textDecoration: 'none' }}
        className="tab-bottom-style"
      >
        <div className="cart-nav-bottom">
          <CiShoppingBasket style={{ width: '30px', height: '30px'}} />
          <div>Cart</div>
        </div>
      </Link>
    </div>
  );
};

export default NavBottom;
