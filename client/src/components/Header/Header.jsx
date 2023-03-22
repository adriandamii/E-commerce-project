import React from 'react';
import { Badge } from 'react-bootstrap';
import { CiHeart, CiShoppingBasket, CiUser } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { mainCategoryArr } from '../../utils';
import SearchBox from '../SearchBox';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';

const Header = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const shoppingBasketList = useSelector(
    (state) => state.addItemShoppingBasket
  );

  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const countProducts = shoppingBasketList
    ?.map?.((item) => item?.quantity)
    ?.reduce((prev, curr) => prev + curr, 0);

  return (
    <header>
      <div className="main-nav">
        <div className="first-nav">
          <div className="logo-position">
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                fontSize: '40px',
              }}
            >
              MARKET
            </Link>
          </div>
          <SearchBox />
          <div className="main-nav-logo">
            <div className="main-nav-compare-logo">
              <GoGraph className="third-logo" />
              <Badge pill bg="danger">
                0
              </Badge>
            </div>
            <div className="main-nav-heart-logo">
              <CiHeart className="second-logo" />
              <Badge pill bg="danger">
                0
              </Badge>
            </div>
            <div className="all-categories">
              <Link to={'/category'}>
                <RxHamburgerMenu
                  className="third-logo"
                  style={{ color: 'white' }}
                />
              </Link>
            </div>
            <div className="main-nav-shop-logo">
              <Link to={'/Cart'} style={{ textDecoration: 'none' }}>
                <CiShoppingBasket
                  className="second-logo"
                  style={{ color: 'white' }}
                />
                {shoppingBasketList?.length ? (
                  <Badge pill bg="success">
                    {countProducts}
                  </Badge>
                ) : (
                  <Badge pill bg="danger">
                    0
                  </Badge>
                )}
              </Link>
            </div>
            <div className="main-nav-user-logo">
              {userInfo && userInfo.isAdmin && (
                <Link to={'/adminpage'} style={{ textDecoration: 'none' }}>
                  <CiUser className="forth-logo" style={{color:"white"}}/>
                </Link>
              )}
              {userInfo && userInfo.isSeller && !userInfo.isAdmin && (
                <Link
                  to={'/seller/accountInfo'}
                  style={{ textDecoration: 'none' }}
                >
                  <CiUser className="forth-logo" style={{color:"white"}}/>
                </Link>
              )}
              {!userInfo && (
                <Link to={'/signin'} style={{ textDecoration: 'none' }}>
                  <CiUser className="forth-logo" style={{color:"white"}}/>
                </Link>
              )}
              {userInfo && !userInfo.isSeller && !userInfo.isAdmin && (
                <Link
                  to={'/client/accountInfo'}
                  style={{ textDecoration: 'none' }}
                >
                  <CiUser className="forth-logo" style={{color:"white"}}/>
                </Link>
              )}
              <div className="login-register">
                {userInfo && userInfo.isAdmin && (
                  <>
                    <Link to={'/adminpage'} style={{ textDecoration: 'none' }}>
                      <div>{userInfo.name}</div>
                    </Link>
                    <Link
                      to="#signout"
                      onClick={signoutHandler}
                      style={{ textDecoration: 'none' }}
                    >
                      <div>Logout</div>
                    </Link>
                  </>
                )}
                {userInfo && userInfo.isSeller && !userInfo.isAdmin && (
                  <>
                    <Link
                      to={'/seller/accountInfo'}
                      style={{ textDecoration: 'none' }}
                    >
                      <div>{userInfo.name}</div>
                    </Link>
                    <Link
                      to="#signout"
                      onClick={signoutHandler}
                      style={{ textDecoration: 'none' }}
                    >
                      <div>Logout</div>
                    </Link>
                  </>
                )}
                {!userInfo && (
                  <>
                    <Link to={'/signin'} style={{ textDecoration: 'none' }}>
                      <div>Login</div>
                    </Link>
                    <Link to={'/register'} style={{ textDecoration: 'none' }}>
                      <div>Register</div>
                    </Link>
                  </>
                )}
                {userInfo && !userInfo.isSeller && !userInfo.isAdmin && (
                  <>
                    <Link
                      to={'/client/accountInfo'}
                      style={{ textDecoration: 'none' }}
                    >
                      <div>{userInfo.name}</div>
                    </Link>
                    <Link
                      to="#signout"
                      style={{ textDecoration: 'none' }}
                      onClick={signoutHandler}
                    >
                      <div>Logout</div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="second-nav">
          <div className="shop-department">
            <RxHamburgerMenu />
            <section className="mainCategory">
              <div className="dropdown" controlid="mainCategory">
                <button className="shop-department-btn" type="button">
                  Shop by Department
                </button>
                <div className="shop-department-dropdown-content">
                  {mainCategoryArr.map(({ value, name, id, im }) => (
                    <Link
                      to={`/filters/pageNumber/1/mainCategory/${value}/name/all/category/all/subCategory/all/model/all/steeringWheel/all/carosery/all/colour/all/condition/all/fuel/all/minPrice/0/maxPrice/0/minYear/0/maxYear/0/minKm/0/maxKm/0/minEngine/0/maxEngine/0/minHorsePower/0/maxHorsePower/0/furnished/all/rooms/all/minUsefulSurface/0/maxUsefulSurface/0/groundType/all/commerceType/all/brand/all/rezolution/all/usefulTask/all/size/all/material/all/season/all/display/all/whichFor/all/waterResistance/all/caseMaterial/all/caseColour/all/soleType/all/floor/all/minLandArea/0/maxLandArea/0/minBuiltArea/0/maxBuiltArea/0/compartimentType/all/productType/all/chargeType/all/mountType/all/tireSize/all/tireWidth/all/tireProfile/all/rimType/all/rimSize/all/age/all/experience/all/operationDistance/all/availability/all/financePosibility/all/guarantee/all/emergencyService/all/memoryR/all/videoType/all/storageType/all/processorBrand/all`}
                      key={id}
                      style={{ textDecoration: 'none' }}
                    >
                      {im} {name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className="home-shop-pages-blog">
            <div className="home-nav">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </div>
            <div className="shop-nav">Shop</div>
            <div className="pages-nav">Pages</div>
            <div className="blog-nav">Blog</div>
          </div>
          <div className="info-nav">
            <div className="sell-nav">
              <Link
                to="/signin"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Sell with us{' '}
              </Link>
            </div>
            <div className="track-order-nav">Track your order</div>
            <div className="money-type-nav">US Dollar</div>
            <div className="language-nav">English</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
