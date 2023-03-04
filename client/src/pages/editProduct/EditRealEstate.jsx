import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { detailsProduct, updateProduct } from '../../actions/productAction';
import toast from 'react-hot-toast';
import {
  capacityArray,
  commerceTypeArray,
  compartimentTypeArray,
  floorArray,
  furnishedArray,
  groundTypeArray,
  mainCategoryObj,
  roomsArray,
  typeParkingGarageArray,
} from '../../utils';
import { BiChevronDown } from 'react-icons/bi';

const editToastFail = () =>
  toast.error('Sorry! Product unsuccessfully edited!');
const editToastSuccess = () => toast.success('Product successfully edited!');

const EditRealEstate = (props) => {
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [whichFor, setWhichFor] = useState('');
  const [furnished, setFurnished] = useState('');
  const [landArea, setLandArea] = useState('');
  const [builtArea, setBuiltArea] = useState('');
  const [usefulSurface, setUsefulSurface] = useState('');
  const [rooms, setRooms] = useState('');
  const [groundType, setGroundType] = useState('');
  const [compartimentType, setCompartimentType] = useState('');
  const [commerceType, setCommerceType] = useState('');
  const [floor, setFloor] = useState('');

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
      setMainCategory(product.mainCategory);
      setName(product.name);
      setCategory(product.category);
      setPrice(product.price);
      setDescription(product.description);
      setSize(product.size);
      setWhichFor(product.whichFor);
      setFurnished(product.furnished);
      setLandArea(product.landArea);
      setBuiltArea(product.builtArea);
      setUsefulSurface(product.usefulSurface);
      setRooms(product.rooms);
      setGroundType(product.groundType);
      setCompartimentType(product.compartimentType);
      setCommerceType(product.commerceType);
      setFloor(product.floor);
      setOldImages(product.images);
    }
  }, [product, dispatch, id, successUpdate, navigate, errorUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('mainCategory', mainCategory);
    myForm.set('category', category);
    myForm.set('description', description);
    myForm.set('price', price);
    myForm.set('size', size);
    myForm.set('whichFor', whichFor);
    myForm.set('furnished', furnished);
    myForm.set('landArea', landArea);
    myForm.set('builtArea', builtArea);
    myForm.set('usefulSurface', usefulSurface);
    myForm.set('rooms', rooms);
    myForm.set('groundType', groundType);
    myForm.set('compartimentType', compartimentType);
    myForm.set('commerceType', commerceType);
    myForm.set('floor', floor);
    images.forEach((image) => {
      myForm.append('images', image);
    });
    dispatch(updateProduct(id, myForm));
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };
  useEffect(() => {
    Object.entries(mainCategoryObj).map((item, index) => {
      if (item[0] === mainCategory) {
        setCategoryArray(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
  }, [mainCategory, category]);

  return (
    <div className="form-container">
      <Helmet>
        <title>Update product</title>
      </Helmet>
      <h1 className="title">Update product</h1>
      {loadingUpdate && <LoadingBox></LoadingBox>}
      {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
      <Form onSubmit={handleSubmit} className="form-container">
        <div className="edit-form-categories">
          <section className="mainCategoryCreate">
            <label className="mb-1">Category</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(category)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {categoryArray.map((c, index) => (
                  <Link
                    to={`/${id}/editProduct/realEstate`}
                    onClick={() => {
                      setCategory(c);
                    }}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            length="20"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={updateProductImagesChange}
          multiple
        />
        <div className="createProductFormImage">
          {imagesPreview.map((image, index) => (
            <img key={index} src={image} alt="Product Preview" />
          ))}
        </div>
        <div className="createProductFormImage">
          {oldImages &&
            oldImages.map((image, index) => (
              <img key={index} src={image.url} alt="Old Product Preview" />
            ))}
        </div>
        {mainCategory === 'realEstate' && (
          <div className="realEstate-create-selectors">
            {category === 'deposits' && (
              <>
                <Form.Group className="mb-3" controlid="landArea">
                  <Form.Label>Land Area</Form.Label>
                  <Form.Control
                    name="landArea"
                    value={landArea}
                    onChange={(e) => setLandArea(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlid="builtArea">
                  <Form.Label>Built Area</Form.Label>
                  <Form.Control
                    name="builtArea"
                    value={builtArea}
                    onChange={(e) => setBuiltArea(e.target.value)}
                    required
                  />
                </Form.Group>
              </>
            )}
            {(category === 'apartmentsForRent' ||
              category === 'apartmentsForSale' ||
              category === 'housesForRent' ||
              category === 'housesForSale' ||
              category === 'officesCommercialSpaces') && (
              <Form.Group className="mb-3" controlid="usefulSurface">
                <Form.Label>Useful Surface</Form.Label>
                <Form.Control
                  name="usefulSurface"
                  value={usefulSurface}
                  onChange={(e) => setUsefulSurface(e.target.value)}
                  required
                />
              </Form.Group>
            )}

            {(category === 'apartmentsForRent' ||
              category === 'apartmentsForSale' ||
              category === 'houseForRent' ||
              category === 'houseForSale') && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Furnished</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(furnished)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {furnishedArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/realEstate`}
                          onClick={() => {
                            setFurnished(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Rooms</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(rooms)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {roomsArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/realEstate`}
                          onClick={() => {
                            setRooms(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Compartiment Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(compartimentType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {compartimentTypeArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/realEstate`}
                          onClick={() => {
                            setCompartimentType(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Floor</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(floor)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {floorArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/realEstate`}
                          onClick={() => {
                            setFloor(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
            {(category === 'grounds' ||
              category === 'officesCommercialSpaces') && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Commerce Type</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {addUpperSpace(commerceType)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {commerceTypeArray.map((c, index) => (
                      <Link
                        to={`/${id}/editProduct/realEstate`}
                        onClick={() => {
                          setCommerceType(c);
                        }}
                        key={index}
                        style={{ textDecoration: 'none' }}
                      >
                        {addUpperSpace(c)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {category === 'grounds' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Ground Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(groundType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {groundTypeArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/realEstate`}
                          onClick={() => {
                            setGroundType(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {category === 'parkingGarage' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Capacity</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(size)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {capacityArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/realEstate`}
                          onClick={() => {
                            setSize(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(whichFor)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {typeParkingGarageArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/realEstate`}
                          onClick={() => {
                            setWhichFor(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        )}
        {loadingUpdate && <LoadingBox></LoadingBox>}
        <Button
          size="large"
          color="secondary"
          type="submit"
          disabled={loadingUpdate ? true : false}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditRealEstate;
