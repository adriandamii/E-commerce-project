import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingBox from '../../../components/LoadingBox';
import MessageBox from '../../../components/MessageBox';
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

  const [isDailyDeals, setIsDailyDeals] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isExclusive, setIsExclusive] = useState(false);

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
      setIsDailyDeals(product.isDailyDeals);
      setIsFeatured(product.isFeatured);
      setIsExclusive(product.isExclusive);

    }
  }, [product, dispatch, id, successUpdate, navigate, errorUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set('isDailyDeals', isDailyDeals);
    myForm.set('isFeatured', isFeatured);
    myForm.set('isExclusive', isExclusive);


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
            <label htmlFor="isDailyDeals">Is Daily Deals</label>
            <input
              id="isDailyDeals"
              type="checkbox"
              checked={isDailyDeals}
              onChange={(e) => setIsDailyDeals(e.target.checked)}
            ></input>
            <label htmlFor="isFeatured">Is Featured</label>
            <input
              id="isFeatured"
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            ></input>
            <label htmlFor="isExclusive">Is Exclusive</label>
            <input
              id="isExclusive"
              type="checkbox"
              checked={isExclusive}
              onChange={(e) => setIsExclusive(e.target.checked)}
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
