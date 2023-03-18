import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { detailsProduct, updateProduct } from '../../actions/productAction';
import toast from 'react-hot-toast';
import { BiChevronDown } from 'react-icons/bi';
import {
  caroseryArray,
  colourArray,
  conditionArray,
  fuelArray,
  mainCategoryObj,
  steeringWheelArray,
  usefulTaskArray,
} from '../../utils';
import LoadingBox from '../../components/LoadingBox';

const editToastFail = () =>
  toast.error('Sorry! Product unsuccessfully edited!');
const editToastMaxLimit = () => toast.error('Max limit is 10MB on each file!');
const editToastSuccess = () => toast.success('Product successfully edited!');

const EditAutoMotoBoats = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryArray, setSubCategoryArray] = useState([]);
  const [modelArray, setModelArray] = useState([]);
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [carosery, setCarosery] = useState('');
  const [fuel, setFuel] = useState('');
  const [engine, setEngine] = useState('');
  const [horsePower, setHorsePower] = useState('');
  const [steeringWheel, setSteeringWheel] = useState('');
  const [description, setDescription] = useState('');
  const [colour, setColour] = useState('');
  const [condition, setCondition] = useState('');
  const [usefulTask, setUsefulTask] = useState('');
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const detailedProduct = useSelector((state) => state.detailedProduct);
  const { product } = detailedProduct;

  const updatedProduct = useSelector((state) => state.updatedProduct);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    maxLimit,
  } = updatedProduct;

  useEffect(() => {
    if (successUpdate) {
      navigate('/');
      editToastSuccess();
    }
    if (maxLimit) {
      editToastMaxLimit();
    }
    if (errorUpdate) {
      editToastFail();
    }
    if (!product || product._id !== id || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(id));
    } else {
      setName(product.name);
      setMainCategory(product.mainCategory);
      setCategory(product.category);
      setSubCategory(product.subCategory);
      setModel(product.model);
      setPrice(product.price);
      setYear(product.year);
      setKm(product.km);
      setCarosery(product.carosery);
      setFuel(product.fuel);
      setEngine(product.engine);
      setUsefulTask(product.usefulTask);
      setHorsePower(product.horsePower);
      setSteeringWheel(product.steeringWheel);
      setDescription(product.description);
      setColour(product.colour);
      setCondition(product.condition);
      setOldImages(product.images);
    }
  }, [product, dispatch, id, successUpdate, navigate, errorUpdate, maxLimit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('mainCategory', mainCategory);
    myForm.set('category', category);
    myForm.set('subCategory', subCategory);
    myForm.set('price', price);
    myForm.set('description', description);
    myForm.set('condition', condition);
    myForm.set('model', model);
    myForm.set('fuel', fuel);
    myForm.set('year', year);
    myForm.set('carosery', carosery);
    myForm.set('colour', colour);
    myForm.set('km', km);
    myForm.set('engine', engine);
    myForm.set('horsePower', horsePower);
    myForm.set('steeringWheel', steeringWheel);
    myForm.set('usefulTask', usefulTask);

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

  useEffect(() => {
    Object.entries(mainCategoryObj).map((item, index) => {
      if (item[0] === mainCategory) {
        setCategoryArray(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.autoMotoBoats).map((item) => {
      //console.log(category);
      if (item[0] === category) {
        setSubCategoryArray(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.autoMotoBoats.cars).map((item) => {
      if (item[0] === subCategory) {
        setModelArray(item[1]);
      }
      return null;
    });
  }, [mainCategory, category, subCategory]);

  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };

  return (
    <div className="form-container">
      <Helmet>
        <title>Update product</title>
      </Helmet>
      <h1 className="title">Update product</h1>
      <Form
        onSubmit={handleSubmit}
        className="form-container"
        encType="multipart/form-data"
      >
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
                    to={`/${id}/editProduct/autoMotoBoats`}
                    onClick={() => {
                      setSubCategory('-');
                      setModel('-');
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

          {(category === 'cars' ||
            category === 'motoScooterAtv' ||
            category === 'autoUtility' ||
            category === 'trucksTrailersCaravans') && (
            <>
              <section className="mainCategoryCreate">
                <label className="mb-1">Sub Category</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {addUpperSpace(subCategory)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {subCategoryArray.map((sc, index) => (
                      <Link
                        to={`/${id}/editProduct/autoMotoBoats`}
                        onClick={() => {
                          setModel('-');
                          setSubCategory(sc);
                        }}
                        key={index}
                        style={{ textDecoration: 'none' }}
                      >
                        {addUpperSpace(sc)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
              {category === 'cars' && (
                <section className="mainCategoryCreate">
                  <label className="mb-1">Model</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(model)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {modelArray.map((m, index) => (
                        <Link
                          to={`/${id}/editProduct/autoMotoBoats`}
                          onClick={() => {
                            //setModelSelect(m);
                            setModel(m);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(m)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
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
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="km">
          <Form.Label>Km</Form.Label>
          <Form.Control
            name="km"
            value={km}
            onChange={(e) => setKm(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="engine">
          <Form.Label>Engine</Form.Label>
          <Form.Control
            name="engine"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="horsePower">
          <Form.Label>Horse Power</Form.Label>
          <Form.Control
            name="horsePower"
            value={horsePower}
            onChange={(e) => setHorsePower(e.target.value)}
            required
          />
        </Form.Group>
        <div className="auto-edit-selectors">
          <section className="mainCategoryCreate">
            <label className="mb-1">Carosery</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(carosery)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {caroseryArray.map((c, index) => (
                  <Link
                    to={`/${id}/editProduct/autoMotoBoats`}
                    onClick={() => {
                      setCarosery(c);
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
          {category === 'autoUtility' && (
            <section className="mainCategoryCreate">
              <label className="mb-1">Useful Task</label>
              <div className="dropdown" controlid="mainCategory">
                <button className="dropbtn" type="button">
                  {usefulTask === ''
                    ? 'Select usefulTask'
                    : addUpperSpace(usefulTask)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {usefulTaskArray.map((c, index) => (
                    <Link
                      to={'/createProduct/autoMotoBoats'}
                      onClick={() => {
                        setUsefulTask(c);
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
          <section className="mainCategoryCreate">
            <label className="mb-1">Steering Wheel</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(steeringWheel)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {steeringWheelArray.map((sw, index) => (
                  <Link
                    to={`/${id}/editProduct/autoMotoBoats`}
                    onClick={() => {
                      setSteeringWheel(sw);
                    }}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(sw)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="mainCategoryCreate">
            <label className="mb-1">Fuel</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(fuel)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {fuelArray.map((f, index) => (
                  <Link
                    to={`/${id}/editProduct/autoMotoBoats`}
                    onClick={() => {
                      setFuel(f);
                    }}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(f)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="mainCategoryCreate">
            <label className="mb-1">Condition</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(condition)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {conditionArray.map((c, index) => (
                  <Link
                    to={`/${id}/editProduct/autoMotoBoats`}
                    onClick={() => {
                      setCondition(c);
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
            <label className="mb-1">Colour</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(colour)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {colourArray.map((c, index) => (
                  <Link
                    to={`/${id}/editProduct/autoMotoBoats`}
                    onClick={() => {
                      setColour(c);
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
        {loadingUpdate && <LoadingBox></LoadingBox>}
        <Button
          size="large"
          color="secondary"
          type="submit"
          className='mb-4'
          disabled={loadingUpdate ? true : false}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditAutoMotoBoats;
