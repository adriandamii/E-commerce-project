import React, { useEffect, useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../actions/productAction';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiPencil, BiTrash } from 'react-icons/bi';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Popup from 'reactjs-popup';
import euro from '../../data/euro.png';
import ProductSpecifications from '../Product Details/ProductSpecifications';
import './product.css';
import { addItemShoppingBasket } from '../../reducers/cartReducer';
import { display } from '@mui/system';

const deleteToast = () => toast.success('Successfully deleted!');

const Product = (props) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const { product, setPromoteProduct } = props;
  const shoppingBasketList = useSelector(
    (state) => state.addItemShoppingBasket
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (deleteItem === true) {
      deleteToast();
      dispatch(deleteProduct(product._id));
      setDeleteItem(false);
    }
  }, [deleteItem, dispatch, navigate, product._id, setPromoteProduct, product]);

  const handleClose = () => {
    setShowDelete(false);
  };

  const deleteHandler = () => {
    setShowDelete(true);
  };

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleCloseMessage = () => {
    setState({ ...state, open: false });
  };

  const [isOpen, setIsOpen] = useState(false);

  const findItem = shoppingBasketList?.find?.(
    (item) => item?.id === product?._id
  );

  const productObject = {
    im: product?.images?.[0].url,
    id: product?._id,
    name: product?.name,
    value: product?.price,
    quantity: 1,
  };

  const message = () => (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message="I love snacks"
      key={vertical + horizontal}
    />
  );

  return (
    <div className="product">
      <Link to={`/${product._id}`}>
        <div className="product-image">
          {product.images[0] !== undefined && (
            <img src={product.images[0].url} alt="" className="product-image" />
          )}
        </div>
      </Link>
      <strong>Name:</strong> {product.name}
      <br></br>
      <strong>Price:</strong> {product.price} <strong>€</strong>
      <br></br>
      <strong>Description:</strong> <p className='short-description'>{product.description}</p>
      <div className='d-flex'>

      <BiTrash onClick={() => deleteHandler(product)} />
      <BiPencil
        onClick={() =>
          navigate(`/${product._id}/editProduct/${product.mainCategory}`)
        }
      />
      <Button variant="secondary" onClick={() => setShow(true)}>
        see details
      </Button>
      <div className="modal-dark-light">
        <Modal show={show} onHide={() => setShow(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title style={{ color: 'black' }}>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: 'black' }}>
            <div className='modal-seedetails'>

            <Carousel variant="dark">
              {product.images.map((img, index) => (
                <Carousel.Item className="slide-show-image" key={index}>
                  <img className="ad-image" src={img.url} alt={img} />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="prices">
              <h3>
                <img src={euro} alt="" /> {product.price}
              </h3>
            </div>
            
            <ProductSpecifications product={product} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <Button
        variant="warning"
        onClick={() => {
          dispatch(
            addItemShoppingBasket({
              type: findItem ? 'addQuantity' : 'addItem',
              payload: productObject,
            })
            );
            setIsOpen(true);
          }}
          >
        Add to cart
      </Button>
      </div>
      {/* <button className="popular-category-button" onClick={(e) => setPromoteProduct(current => [...current, product])}>
        Promote
      </button> */}
      <div className="modal-dark-light">
        <Modal show={isOpen} onHide={() => setIsOpen(false)} size="m">
          <Modal.Header closeButton>
            <strong>{productObject.name}</strong>&nbsp;has been added to your
            cart!
          </Modal.Header>
          <Modal.Body style={{ color: 'black' }}>
            <img width={'auto'} height={100} src={productObject?.im} alt="" />
            <div>
              Price: {productObject.value} Quantity: {productObject.quantity}
            </div>
            <div className="delete justify-right">
              <Button
                onClick={() => {
                  dispatch(
                    addItemShoppingBasket({
                      type: 'undoAddCart',
                      payload: productObject,
                    })
                  );
                  setIsOpen(false);
                }}
              >
                Undo
              </Button>
            </div>
            <div className="message">
              <Link to="/cart">Go to shopping basket</Link>
            </div>
            <div></div>
            <div className="delete justify-right">
              <Button onClick={() => setIsOpen(false)}>shopping</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <Modal
        show={showDelete}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        variant="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setDeleteItem(true)}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Product;
