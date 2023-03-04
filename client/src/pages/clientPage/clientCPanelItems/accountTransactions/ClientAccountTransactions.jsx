import React from 'react';
import ClientMainListInfo from '../../../../components/accountComponents/clientMainList/ClientMainListInfo';
import './accountTransactions.css';

const ClientAccountTransactions = () => {
  return (
    <div className="account-transactions">
      <ClientMainListInfo />
      <h2>Account Transactions</h2>
    </div>
  );
};

export default ClientAccountTransactions;
