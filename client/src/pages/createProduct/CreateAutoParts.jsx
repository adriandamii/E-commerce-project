import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct } from '../../actions/productAction';

import { PRODUCT_CREATE_RESET } from '../../constants/productConstants';
import toast from 'react-hot-toast';
import {
  autoBrandsArray,
  chargeTypeArray,
  conditionArray,
  mainCategoryCreate,
  mainCategoryObj,
  mountTypeArray,
  productTypeArray,
  rimSizeArray,
  rimTypeArray,
  tireProfileArray,
  tireSeasonArray,
  tireSizeArray,
  tireWidthArray,
  useArray,
} from '../../utils';
import { BiChevronDown } from 'react-icons/bi';
import LoadingBox from '../../components/LoadingBox';
import './create.css';

const createToastSuccess = () =>
  toast.success('Product successfully created!');
const createToastFail = () =>
  toast.error('Sorry! Product unsuccessfully created!');
const createToastMaxLimit = () => toast('Max limit is 10MB on each file!');

export default function CreateAutoParts(props) {
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('autoParts');
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [season, setSeason] = useState('');
  const [whichFor, setWhichFor] = useState('');
  const [brand, setBrand] = useState('');
  const [mountType, setMountType] = useState('');
  const [productType, setProductType] = useState('');
  const [chargeType, setChargeType] = useState('');
  const [tireSize, setTireSize] = useState('');
  const [tireWidth, setTireWidth] = useState('');
  const [tireProfile, setTireProfile] = useState('');
  const [rimType, setRimType] = useState('');
  const [rimSize, setRimSize] = useState('');

  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryArray, setSubCategoryArray] = useState([]);
  const [mainCategorySelect, setMainCategorySelect] = useState('autoParts');
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

    myForm.set('mainCategory', mainCategory);
    myForm.set('name', name);
    myForm.set('category', category);
    myForm.set('subCategory', subCategory);
    myForm.set('condition', condition);
    myForm.set('price', price);
    myForm.set('description', description);
    myForm.set('season', season);
    myForm.set('whichFor', whichFor);
    myForm.set('brand', brand);
    myForm.set('mountType', mountType);
    myForm.set('productType', productType);
    myForm.set('chargeType', chargeType);
    myForm.set('tireSize', tireSize);
    myForm.set('tireWidth', tireWidth);
    myForm.set('tireProfile', tireProfile);
    myForm.set('rimType', rimType);
    myForm.set('rimSize', rimSize);

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

    Object.entries(mainCategoryObj.autoParts).map((item) => {
      if (item[0] === categorySelect) {
        setSubCategoryArray(Object.getOwnPropertyNames(item[1]));
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
      <Form
        onSubmit={handleSubmit}
        className="form-container"
        encType="multipart/form-data"
        action="/multiple-upload"
      >
        <div className="create-form-categories">
          <section className="mainCategoryCreate">
            <label className="mb-1">Main Category</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn">
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
                    to={'/createProduct/autoParts'}
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
          {categorySelect === 'wheelsRimsTires' && (
            <>
              <section className="mainCategoryCreate">
                <label className="mb-1">Sub Category</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {addUpperSpace(subCategorySelect)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {subCategoryArray.map((sc, index) => (
                      <Link
                        to={'/createProduct/autoParts'}
                        onClick={() => {
                          setSubCategorySelect(sc);
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
            </>
          )}
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
        {/* ---------------------------------------------------------------------------autoParts */}
        {mainCategorySelect === 'autoParts' && (
          <div className="autoParts-create-selectors">
            {categorySelect === 'wheelsRimsTires' && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Condition</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {condition === ''
                      ? 'Select Condition'
                      : addUpperSpace(condition)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {conditionArray.map((c, index) => (
                      <Link
                        to={'/createProduct/autoParts'}
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
            )}
            {categorySelect === 'electricStation' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Mount Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {mountType === ''
                        ? 'Select Mount Type'
                        : addUpperSpace(mountType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {mountTypeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setMountType(c);
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
                  <label className="mb-1">Product Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {productType === ''
                        ? 'Select Product Type'
                        : addUpperSpace(productType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {productTypeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setProductType(c);
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
                  <label className="mb-1">Use</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {whichFor === '' ? 'Select Use' : addUpperSpace(whichFor)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {useArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
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
                <section className="mainCategoryCreate">
                  <label className="mb-1">Charge Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {chargeType === ''
                        ? 'Select Charge Type'
                        : addUpperSpace(chargeType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {chargeTypeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setChargeType(c);
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
            {subCategorySelect === 'tires' && (
              <>
                <section className="season">
                  <label className="mb-1">Season</label>
                  <div className="dropdown" controlid="season">
                    <button className="dropbtn" type="button">
                      {season === '' ? 'Select Season' : addUpperSpace(season)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {tireSeasonArray.map((b, index) => (
                        <Link
                          key={index}
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setSeason(b);
                          }}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperSpace(b)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Tire Size</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {tireSize === ''
                        ? 'Select Tire Size'
                        : addUpperSpace(tireSize)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {tireSizeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setTireSize(c);
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
                  <label className="mb-1">Tire Width</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {tireWidth === ''
                        ? 'Select Tire Width'
                        : addUpperSpace(tireWidth)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {tireWidthArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setTireWidth(c);
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
                  <label className="mb-1">Tire Profile</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {tireProfile === ''
                        ? 'Select TireP rofile'
                        : addUpperSpace(tireProfile)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {tireProfileArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setTireProfile(c);
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
            {subCategorySelect === 'wheelsAndRims' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Brand</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {brand === '' ? 'Select Brand' : addUpperSpace(brand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {autoBrandsArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setBrand(c);
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
                  <label className="mb-1">Rim Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {rimType === ''
                        ? 'Select Rim Type'
                        : addUpperSpace(rimType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {rimTypeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setRimType(c);
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
                  <label className="mb-1">Rim Size</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {rimSize === ''
                        ? 'Select Rim Size'
                        : addUpperSpace(rimSize)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {rimSizeArray.map((c, index) => (
                        <Link
                          to={'/createProduct/autoParts'}
                          onClick={() => {
                            setRimSize(c);
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
        <Button
          size="large"
          color="secondary"
          type="submit"
          disabled={loadingCreate ? true : false}
        >
          Create
        </Button>
      </Form>
    </div>
  );
}
