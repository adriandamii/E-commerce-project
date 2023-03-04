import React from 'react';
import { Badge } from 'react-bootstrap';
import { CiHeart, CiShoppingBasket, CiUser } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { mainCategoryArr } from '../../../utils';
import SearchBox from '../../SearchBox';

const HiddenNav = () => {
  return (
    <div className="hidden-nav-home-page" id="navbar">
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
                  to={`/filters/mainCategory/${value}/name/all/category/all/subCategory/all/model/all/steeringWheel/all/carosery/all/colour/all/condition/all/fuel/all/minPrice/0/maxPrice/0/minYear/0/maxYear/0/minKm/0/maxKm/0/minEngine/0/maxEngine/0/minHorsePower/0/maxHorsePower/0/furnished/all/rooms/all/minUsefulSurface/0/maxUsefulSurface/0/groundType/all/commerceType/all/brand/all/rezolution/all/usefulTask/all/size/all/material/all/season/all/display/all/whichFor/all/waterResistance/all/caseMaterial/all/caseColour/all/soleType/all/floor/all/minLandArea/0/maxLandArea/0/minBuiltArea/0/maxBuiltArea/0/compartimentType/all/productType/all/chargeType/all/mountType/all/tireSize/all/tireWidth/all/tireProfile/all/rimType/all/rimSize/all/age/all/experience/all/operationDistance/all/availability/all/financePosibility/all/guarantee/all/emergencyService/all/memoryR/all/videoType/all/storageType/all/processorBrand/all`}
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
        <div className="main-nav-shop-logo">
          <CiShoppingBasket className="second-logo" />
          <Badge pill bg="danger">
            0
          </Badge>
        </div>
        <div className="main-nav-user-logo">
          <CiUser className="forth-logo" />
          <div className="login-register">
            <div>Login</div>
            <div>Register</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenNav;
