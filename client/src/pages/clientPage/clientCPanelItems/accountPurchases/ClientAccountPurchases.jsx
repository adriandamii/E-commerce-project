import React from 'react';
import ClientMainListInfo from '../../../../components/accountComponents/clientMainList/ClientMainListInfo';
import './accountPurchases.css';

const ClientAccountPurchases = () => {
  return (
    <div className="account-purchases">
      <ClientMainListInfo />
      <h2>Account Purchases</h2>
    </div>
  );
};

export default ClientAccountPurchases;
