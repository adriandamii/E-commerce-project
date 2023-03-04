import React, { useEffect, useState } from 'react';
import './form-login-register.css';
import { connect } from 'react-redux';
import { register, cleanErrors } from '../../actions/userActions';
import { Button } from 'react-bootstrap';

const RegisterPage = (props) => {
  const [registerUsername, setregisterUsername] = useState('');
  const [registerEmail, setregisterEmail] = useState('');
  const [registerPassword, setregisterPassword] = useState('');
  const [registerCheckPassword, setregisterCheckPassword] = useState('');
  //const [registerImage, setRegisterImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (props.errors) {
      setError(props.errors.msg);
    }
  }, [props]);

  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = new FormData();
      newUser.append('registerUsername', registerUsername);
      newUser.append('registerEmail', registerEmail);
      newUser.append('registerPassword', registerPassword);
      newUser.append('registerCheckPassword', registerCheckPassword);
      //newUser.append('registerImage', registerImage);
      props.register(newUser, props.history, callback);

      function callback() {
        setregisterUsername('');
        setregisterEmail('');
        setregisterPassword('');
        setregisterCheckPassword('');
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        setError(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  // const fileSelectHandler = (e) => {
  //   e.preventDefault();
  //   setRegisterImage(e.target.files[0]);
  // };

  return (
    <div>
      <form action="#" className="login-register-form">
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setregisterUsername(e.target.value)}
          value={registerUsername}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setregisterEmail(e.target.value)}
          value={registerEmail}
          required
        />
        <input
          type="password"
          placeholder="Your Password"
          onChange={(e) => setregisterPassword(e.target.value)}
          value={registerPassword}
          required
        />
        <input
          type="password"
          placeholder="Repeat Your Password"
          onChange={(e) => setregisterCheckPassword(e.target.value)}
          value={registerCheckPassword}
          required
        />
        {/* <input
              className="login_input"
              type="file"
              name="registerImage"
              accept=".png, .jpg, .jpeg"
              onChange={fileSelectHandler}
            /> */}
        <div className="form_error">{error}</div>
        <Button variant="dark" onClick={submitRegister}>
          Register
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  register,
  cleanErrors,
})(RegisterPage);
