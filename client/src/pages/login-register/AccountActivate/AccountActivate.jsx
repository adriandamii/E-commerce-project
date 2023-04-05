import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { activateUser } from '../../../actions/userActions';
import './AccountActivate.css';
import { Button } from 'react-bootstrap';

const AccountActivate = (props) => {
  const { token } = useParams();
  const [status, setStatus] = useState(false);

  const activateReq = async (e) => {
    props.activateUser({ token }, props.navigate, setStatus);
  };

  return (
    <div className="account-activate-container">
      <div className="account-activate-title">Activate Account</div>
      {status ? (
        <div className="account-activate-flex">
          <div>Your Account Activated Successfully.</div>
          <div>
            Please go to <Link to={'/signin'}>login</Link> page.
          </div>
        </div>
      ) : (
        <div className="account-activate-flex">
          <div>Please Click on below button to activate your account</div>
          <Button variant="dark" onClick={activateReq}>
            Activate
          </Button>
        </div>
      )}
    </div>
  );
};

export default connect(null, { activateUser })(AccountActivate);
