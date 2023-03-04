import React from 'react';
import { useSelector } from 'react-redux';
import './accountQuickDetails.css'
const AccountQuickDetails = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div className="quick-info-account">
      <h2>My Information</h2>
      <div>Name: <b>{userInfo.name}</b></div>
      <div>Email: <b>{userInfo.email}</b></div>    
    </div>
  );
};

export default AccountQuickDetails;
