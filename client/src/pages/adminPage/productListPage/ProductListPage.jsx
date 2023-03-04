import React, { useEffect, useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
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
import ProductSpecifications from '../../../components/Product Details/ProductSpecifications';
import euro from '../../../data/euro.png';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import './productListPage.css';



export default function ProductListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
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
      getProducts({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    dispatch,
    navigate,
    sellerMode,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
  const deleteHandler = (product) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(product._id));
    }
  };
  const createHandler = () => {
    navigate('/createProduct');
  };

  return (
    <div>
      <div>
        <h1>Products</h1>
        <Button
          variant="info"
          type="button"
          className="primary"
          onClick={createHandler}
        >
          Create Product
        </Button>
      </div>

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
                <th className='id-product'>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th className='category-productlist'>CATEGORY</th>
                {/* <th>SELLER</th> */}
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className='id-product'>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td className='category-productlist'>{product.category}</td>
                  {/* <td>{product.seller.seller.name}</td> */}

                  <td>
                    <div className="actions">
                      <RxHamburgerMenu
                        type="button"
                        onClick={() => setShow(true)}
                      />
                      <div className='details-modal'>
                        <Modal
                          show={show}
                          onHide={() => setShow(false)}
                          size="xl"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title style={{ color: 'black' }}>
                              {product.name}
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body style={{ color: 'black' }} className='modal-seedetails'>
                            
                              <Carousel variant="dark">
                                {product.images.map((img, index) => (
                                  <Carousel.Item
                                    className="slide-show-image"
                                    key={index}
                                  >
                                    <img
                                      className="ad-image"
                                      src={img.url}
                                      alt={img}
                                    />
                                  </Carousel.Item>
                                ))}
                              </Carousel>
                                <p>{product.description}</p>
                              <div className="prices">
                                <h3>
                                  <img src={euro} alt="" /> {product.price}
                                </h3>
                              </div>
                              <ProductSpecifications product={product} />
                            
                          </Modal.Body>
                        </Modal>
                      </div>
                      <BiPencil
                        type="button"
                        onClick={() =>
                          navigate(
                            `/${product._id}/editProduct/${product.mainCategory}`
                          )
                        }
                      />
                      <BiTrash
                        type="button"
                        onClick={() => deleteHandler(product)}
                      />
                    </div>
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
                to={`/productlist/pageNumber/${x + 1}`}
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
