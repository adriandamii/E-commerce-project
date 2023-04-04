import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsUser, updateUser } from '../../../actions/userActions';
import LoadingBox from '../../../components/LoadingBox';
import MessageBox from '../../../components/MessageBox';
import { USER_UPDATE_RESET } from '../../../constants/userConstants';
import toast from 'react-hot-toast';
import { detailsProduct, updateProduct } from '../../../actions/productAction';
import { PRODUCT_UPDATE_RESET } from '../../../constants/productConstants';

const editToastFail = () =>
  toast.error('Sorry! Product unsuccessfully edited!');
const editToastSuccess = () => toast.success('Product successfully edited!');

export default function StatusProduct(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [wantDailyDeals, setWantDailyDeals] = useState(false);
  const [wantFeatured, setWantFeatured] = useState(false);
  const [wantExclusive, setWantExclusive] = useState(false);

  const detailedProduct = useSelector((state) => state.detailedProduct);
  const { product } = detailedProduct;

  const updatedProduct = useSelector((state) => state.updatedProduct);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = updatedProduct;

  useEffect(() => {
    if (successUpdate) {
      navigate('/');
      editToastSuccess();
    }
    if (errorUpdate) {
      editToastFail();
    }
    if (!product || product._id !== id || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(id));
    } else {
      setWantDailyDeals(product.wantDailyDeals);
      setWantFeatured(product.wantFeatured);
      setWantExclusive(product.wantExclusive);
    }
  }, [product, dispatch, id, successUpdate, navigate, errorUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set('wantDailyDeals', wantDailyDeals);
    myForm.set('wantFeatured', wantFeatured);
    myForm.set('wantExclusive', wantExclusive);

    dispatch(updateProduct(id, myForm));
  };

  return (
    <div className="form">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product Status </h1>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
        <>
          <div>
            <label htmlFor="wantDailyDeals">Want to be Daily Deals ?</label>
            <input
              id="wantDailyDeals"
              type="checkbox"
              checked={wantDailyDeals}
              onChange={(e) => setWantDailyDeals(e.target.checked)}
            ></input>

            <label htmlFor="wantFeatured">Want to be Featured ?</label>
            <input
              id="wantFeatured"
              type="checkbox"
              checked={wantFeatured}
              onChange={(e) => setWantFeatured(e.target.checked)}
            ></input>

            <label htmlFor="wantExclusive">Want to be Exclusive ?</label>
            <input
              id="wantExclusive"
              type="checkbox"
              checked={wantExclusive}
              onChange={(e) => setWantExclusive(e.target.checked)}
            ></input>
          </div>
          <div>
            <Button type="submit" className="primary" variant="dark">
              Update
            </Button>
          </div>
        </>
      </form>
    </div>
  );
}
