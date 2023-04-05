import React, { useEffect } from 'react';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  deleteProduct,
  getProducts,
} from '../../../actions/productAction';
import LoadingBox from '../../../components/LoadingBox';
import MessageBox from '../../../components/MessageBox';
import {
  PRODUCT_DELETE_RESET,
} from '../../../constants/productConstants';

export default function ViewUserProducts() {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  let userID = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products, page, pages } = productsList;
  const deletedProduct = useSelector((state) => state.deletedProduct);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = deletedProduct;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      getProducts({ seller: sellerMode ? userID.id : '', pageNumber })
    );
  }, [
    dispatch,
    navigate,
    sellerMode,
    successDelete,
    userInfo._id,
    pageNumber,
    userID
  ]);
  const deleteHandler = (product) => {
    if (window.confirm('Are you sure you want to delete it?')) {
      dispatch(deleteProduct(product._id));
    }
  };
  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };

  function getProductId(product) {
    navigate(`/productStatus/${product._id}`);
  }

  return (
    <div className='main-product-list'>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th className="productlist-id">ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th className="category-productlist">CATEGORY</th>
                {/* <th>SELLER</th> */}
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="productlist-id">{product._id}</td>
                  <td onClick={() => getProductId(product)} style={{textDecoration: "underline", cursor:"pointer"}}>{product.name}</td>
                  <td>{product.price}</td>
                  <td className="category-productlist">{addUpperSpace(product.category)}</td>
                  {/* <td>{product.seller.seller.name}</td> */}

                  <td className="actions">

                  <BiPencil
                  className="icon-size"
                    onClick={() =>
                      navigate(
                        `/${product._id}/editProduct/${product.mainCategory}`
                      )
                    }
                  />
                  &nbsp;&nbsp;
                    <BiTrash className="icon-size" onClick={() => deleteHandler(product)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'active' : ''}
                key={x + 1}
                to={`/productlist/seller/${userID.id}/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
