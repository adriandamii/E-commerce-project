import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct } from '../../actions/productAction';
import { PRODUCT_CREATE_RESET } from '../../constants/productConstants';
import toast from 'react-hot-toast';
import {
  capacityArray,
  commerceTypeArray,
  compartimentTypeArray,
  floorArray,
  furnishedArray,
  groundTypeArray,
  mainCategoryCreate,
  mainCategoryObj,
  roomsArray,
  typeParkingGarageArray,
} from '../../utils';
import { BiChevronDown } from 'react-icons/bi';
import LoadingBox from '../../components/LoadingBox';
import './create.css';

const createToastSuccess = () =>
  toast.success('Product successfully created!');
const createToastFail = () =>
  toast.error('Sorry! Product unsuccessfully created!');
const createToastMaxLimit = () => toast('Max limit is 10MB on each file!');

export default function CreateRealEstate(props) {
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('realEstate');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [whichFor, setWhichFor] = useState('');
  const [furnished, setFurnished] = useState(''); //realEstate
  const [landArea, setLandArea] = useState('');
  const [builtArea, setBuiltArea] = useState('');
  const [usefulSurface, setUsefulSurface] = useState('');
  const [rooms, setRooms] = useState('');
  const [groundType, setGroundType] = useState('');
  const [compartimentType, setCompartimentType] = useState('');
  const [commerceType, setCommerceType] = useState('');
  const [floor, setFloor] = useState('');
  const [categoryArray, setCategoryArray] = useState([]);
  const [mainCategorySelect, setMainCategorySelect] = useState('realEstate');
  const [categorySelect, setCategorySelect] = useState('Select Category');
  const [subCategorySelect, setSubCategorySelect] = useState(
    'Select Sub Category'
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createdProduct = useSelector((state) => state.createdProduct);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    maxLimit,
  } = createdProduct;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      navigate('/');
      createToastSuccess();
    }
    if (maxLimit) {
      createToastMaxLimit();
    }
    if (errorCreate) {
      createToastFail();
    }
  }, [successCreate, errorCreate, maxLimit, dispatch, navigate]);

  const handleSubmit = async (e) => {
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
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

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

  // const addUpperFirst = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };
  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };
  useEffect(() => {
    Object.entries(mainCategoryObj).map((item, index) => {
      if (item[0] === mainCategorySelect) {
        setCategoryArray(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
  }, [mainCategorySelect, categorySelect, subCategorySelect]);

  return (
    <div className="form-container">
      <Helmet>
        <title>Create Product</title>
      </Helmet>
      <h1 className="title">Create Product</h1>
      <Form onSubmit={handleSubmit} className="form-container">
        <div className="create-form-categories">
          <section className="mainCategoryCreate">
            <label className="mb-1">Main Category</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(mainCategorySelect)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {mainCategoryCreate.map((mc, index) => (
                  <Link
                    to={`/createProduct/${mc}`}
                    onClick={() => {
                      setMainCategorySelect(mc);
                      setCategorySelect('Select Category');
                      setSubCategorySelect('Select Sub Category');
                      setMainCategory(mc);
                    }}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(mc)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="mainCategoryCreate">
            <label className="mb-1">Category</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(categorySelect)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {categoryArray.map((c, index) => (
                  <Link
                    to={'/createProduct/realEstate'}
                    onClick={() => {
                      setCategorySelect(c);
                      setSubCategorySelect('Select Sub Category');
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
        <Form.Group className="mb-3" controlid="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoComplete="off"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="description">
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
          onChange={createProductImagesChange}
          multiple
        />
        <div className="createProductFormImage">
          {imagesPreview.map((image, index) => (
            <img key={index} src={image} alt="Product Preview" />
          ))}
        </div>
        {/* --------------------------------------------------------------------------realEstate */}
        {mainCategorySelect === 'realEstate' && (
          <div className="realEstate-create-selectors">
            {categorySelect === 'deposits' && (
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
            {(categorySelect === 'apartmentsForRent' ||
              categorySelect === 'apartmentsForSale' ||
              categorySelect === 'housesForRent' ||
              categorySelect === 'housesForSale' ||
              categorySelect === 'officesCommercialSpaces') && (
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

            {(categorySelect === 'apartmentsForRent' ||
              categorySelect === 'apartmentsForSale' ||
              categorySelect === 'housesForRent' ||
              categorySelect === 'housesForSale') && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Furnished</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {furnished === ''
                        ? 'Select furnished'
                        : addUpperSpace(furnished)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {furnishedArray.map((c, index) => (
                        <Link
                          to={'/createProduct/realEstate'}
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
                      {rooms === '' ? 'Select rooms' : addUpperSpace(rooms)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {roomsArray.map((c, index) => (
                        <Link
                          to={'/createProduct/realEstate'}
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
                      {compartimentType === ''
                        ? 'Select compartimentType'
                        : addUpperSpace(compartimentType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {compartimentTypeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/realEstate'}
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
                      {floor === '' ? 'Select floor' : addUpperSpace(floor)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {floorArray.map((c, index) => (
                        <Link
                          to={'/createProduct/realEstate'}
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
            {(categorySelect === 'grounds' ||
              categorySelect === 'officesCommercialSpaces') && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Commerce Type</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {commerceType === ''
                      ? 'Select commerceType'
                      : addUpperSpace(commerceType)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {commerceTypeArray.map((c, index) => (
                      <Link
                        to={'/createProduct/realEstate'}
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
            {categorySelect === 'grounds' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Ground Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {groundType === ''
                        ? 'Select groundType'
                        : addUpperSpace(groundType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {groundTypeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/realEstate'}
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

            {categorySelect === 'parkingGarage' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Capacity</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {size === '' ? 'Select Capacity' : addUpperSpace(size)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {capacityArray.map((c, index) => (
                        <Link
                          to={'/createProduct/realEstate'}
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
                      {whichFor === ''
                        ? 'Select type'
                        : addUpperSpace(whichFor)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {typeParkingGarageArray.map((c, index) => (
                        <Link
                          to={'/createProduct/realEstate'}
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
        {loadingCreate && <LoadingBox></LoadingBox>}
        {imagesPreview.length === 0 ? (
          <>
            <p>Please upload images to create a product!</p>
            <Button
              color="secondary"
              className="mb-4"
              disabled={loadingCreate ? true : false}
            >
              Create
            </Button>
          </>
        ) : (
          <Button
            size="large"
            color="secondary"
            type="submit"
            className="mb-4 mt-3"
            disabled={loadingCreate ? true : false}
          >
            Create
          </Button>
        )}
      </Form>
    </div>
  );
}
