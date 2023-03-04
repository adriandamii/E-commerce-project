import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../../../actions/userActions';
import AccountQuickDetails from '../../../../components/accountComponents/accountQuickDetails/AccountQuickDetails';
import SellerMainListInfo from '../../../../components/accountComponents/sellerMainList/SellerMainListInfo';
import './sellerInformation.css';

const SellerInformation = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <div className="account-informations">
        <SellerMainListInfo />
        <AccountQuickDetails />
      </div>
    </>
  );
};

export default SellerInformation;
