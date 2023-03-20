import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './form-login-register.css';

const sendEmail = () => toast.success('Email sent successfully!');
const invalidUser = () => toast.error('Invalid user!');
const emailRequired = () =>
  toast(
    <div>
      <span className="info-icon">
        <i className="fas fa-info-circle"></i>
      </span>{' '}
      Email is required!
    </div>
  );
const includeAnA = () =>
  toast(
    <div>
      <span className="info-icon">
        <i className="fas fa-info-circle"></i>
      </span>{' '}
      You must include @!{' '}
    </div>
  );

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = async (e) => {
    e.preventDefault();

    if (email === '') {
      emailRequired();
    } else if (!email.includes('@')) {
      includeAnA();
    } else {
      const res = await fetch('/users/sendpasswordlink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setEmail('');
        sendEmail();
      } else {
        invalidUser();
      }
    }
  };

  return (
    <form className="login-register-form">
      <div>
        <h1>Enter you email</h1>
      </div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={setVal}
        name="email"
        id="email"
        placeholder="Enter Your Email Address"
      />
      <Button className="btn" variant="dark" onClick={sendLink}>
        Send
      </Button>
    </form>
  );
}
