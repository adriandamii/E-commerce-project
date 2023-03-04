import React from 'react';
import SellerMainListInfo from '../../../../components/accountComponents/sellerMainList/SellerMainListInfo';
import './accountTransactions.css';

const AccountTransactions = () => {
  return (
    <div className="account-transactions">
      <SellerMainListInfo />
      <h2>Account Transactions</h2>
    </div>
  );
};

export default AccountTransactions;
