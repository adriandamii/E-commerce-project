import React, { useEffect, useState } from 'react';
import ClientMainListInfo from '../../../../components/accountComponents/clientMainList/ClientMainListInfo';
import './wts.css';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USER_UPDATE_PROFILE_RESET } from '../../../../constants/userConstants';
import {
  detailsUser,
  updateUserProfile,
} from '../../../../actions/userActions';
import LoadingBox from '../../../../components/LoadingBox';
import MessageBox from '../../../../components/MessageBox';

const Wts = () => {
  const [wantToSell, setWantToSell] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setWantToSell(user.wantToSell);
    }
  }, [dispatch, userInfo._id, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    setWantToSell(!wantToSell);

    // dispatch update profile

    dispatch(
      updateUserProfile({
        userId: user._id,
        wantToSell: !wantToSell,
      })
    );
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profile Updated Successfully
              </MessageBox>
            )}
            {/* <div>
              <label htmlFor="wantToSell">Want to sell</label>
              <input
                id="wantToSell"
                type="checkbox"
                checked={wantToSell}
                onChange={(e) => setWantToSell(e.target.checked)}
              ></input>
            </div> */}
            <div>
              <label />
              <Button variant={wantToSell ? 'danger' : 'dark'} type="submit">
                {wantToSell ? 'Cancel Seller' : 'Want to sell'}
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Wts;
