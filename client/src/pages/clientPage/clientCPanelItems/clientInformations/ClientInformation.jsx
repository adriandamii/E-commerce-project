import React from 'react';
import { useSelector } from 'react-redux';
import AccountQuickDetails from '../../../../components/accountComponents/accountQuickDetails/AccountQuickDetails';
import ClientMainListInfo from '../../../../components/accountComponents/clientMainList/ClientMainListInfo';
import NavBottom from '../../../../components/NavBottom/NavBottom';
import './clientInformation.css';

const ClientInformation = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <div className="account-informations">
        <ClientMainListInfo />
        <AccountQuickDetails />
        <NavBottom />

      </div>
    </>
  );
};

export default ClientInformation;
