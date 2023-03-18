import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSignOutAlt,
  FaUserAlt,
  FaMoneyCheck,
  FaPeopleArrows,
  FaSearchPlus,
  FaRegQuestionCircle,
  FaBoxes,
  FaCartArrowDown,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../../actions/userActions';
import '../accountPage.css';

const MainListInfo = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="account-page">
      <div className="greeting-user">
        Hello <b>{userInfo.name}</b>
      </div>
      <ul className="account-list-details">
        <Link
          to={'/userlist'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>
            <FaUserAlt className="small-logo" /> Users
          </li>
        </Link>
        <Link
          to={'/productlist'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>
            <FaBoxes />
            My Products
          </li>
        </Link>
        <Link
          to={'/seller/purchases'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>
            <FaMoneyCheck /> Purchases
          </li>
        </Link>
        <Link
          to={'/seller/transactions'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>
            <FaPeopleArrows />
            Transactions
          </li>
        </Link>
        {/* <Link
          to={'/kyc'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>
            <FaSearchPlus />
            KYC (Know your customer)
          </li>
        </Link> */}
        <Link
          to={'/help'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>
            <FaRegQuestionCircle />
            Help/Contact Us
          </li>
        </Link>
        {/* <Link
          to={'/profile'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>
            <FaCartArrowDown />
            Become a Seller
          </li>
        </Link> */}
        <Link
          to="#signout"
          style={{ textDecoration: 'none', color: 'black' }}
          onClick={signoutHandler}
        >
          <li>
            <FaSignOutAlt /> Sign Out
          </li>
        </Link>
        {/* <Link
          to={'/orderlist/seller'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <li>Order List</li>
        </Link> */}

        {/* {mainCategoryArr.map(({ value, name, id, im }) => (
                    <Link
                      to={`/filters/mainCategory/${value}/name/all/category/all/subCategory/all/model/all/steeringWheel/all/carosery/all/colour/all/condition/all/fuel/all/minPrice/0/maxPrice/0/minYear/0/maxYear/0/minKm/0/maxKm/0/minEngine/0/maxEngine/0/minHorsePower/0/maxHorsePower/0/furnished/all/rooms/all/minUsefulSurface/0/maxUsefulSurface/0/groundType/all/commerceType/all/brand/all/rezolution/all/usefulTask/all/size/all/material/all/season/all/display/all/whichFor/all/waterResistance/all/caseMaterial/all/caseColour/all/soleType/all/floor/all/minLandArea/0/maxLandArea/0/minBuiltArea/0/maxBuiltArea/0/compartimentType/all/productType/all/chargeType/all/mountType/all/tireSize/all/tireWidth/all/tireProfile/all/rimType/all/rimSize/all/age/all/experience/all/operationDistance/all/availability/all/financePosibility/all/guarantee/all/emergencyService/all/memoryR/all/videoType/all/storageType/all/processorBrand/all`}
                      key={id}
                      style={{ textDecoration: 'none' }}
                    >
                      {im} {name}
                    </Link>
                  ))} */}
      </ul>
    </div>
  );
};

export default MainListInfo;
