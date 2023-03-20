import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './form-login-register.css';

const resetPasswordSuccess = () => toast.success('Password reset successfully!');
const expiredToken = () => toast.error('Token Expired! Generate a new Link');

const passwordRequired = () =>
  toast(
    <div>
      <span className="info-icon">
        <i className="fas fa-info-circle"></i>
      </span>{' '}
      Password is required!
    </div>
  );
const min6 = () =>
  toast(
    <div>
      <span className="info-icon">
        <i className="fas fa-info-circle"></i>
      </span>{' '}
      Minimum 6 characters!{' '}
    </div>
  );

export default function PasswordReset() {
  const { id, token } = useParams();
  const history = useNavigate();

  const [password, setPassword] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userValid = async () => {
    const res = await fetch(`/users/forgotpassword/${id}/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.status === 201) {
      console.log('user valid');
    } else {
      history('*');
    }
  };

  const setval = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();

    if (password === '') {
      passwordRequired();
    } else if (password.length < 6) {
      min6();
    } else {
      const res = await fetch(`/users/${id}/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.status === 201) {
        resetPasswordSuccess();
        setPassword('');
      } else {
        expiredToken();
      }
    }
  };

  useEffect(() => {
    userValid();
    setTimeout(() => {}, 3000);
  }, [userValid]);

  return (
    <form className="login-register-form">
      <h1>Enter Your NEW Password</h1>
      <label htmlFor="password">New password</label>
      <input
        type="password"
        value={password}
        onChange={setval}
        name="password"
        id="password"
        placeholder="Enter Your new password"
      />
      <Button  variant="dark" onClick={sendpassword}>
        Reset
      </Button>
      <p>Go to <Link to="/signin">login</Link> page</p>
      
    </form>
  );
}
