import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct } from '../../actions/productAction';
import { PRODUCT_CREATE_RESET } from '../../constants/productConstants';
import toast from 'react-hot-toast';
import {
  availabilityArray,
  emergencyServiceArray,
  experienceArray,
  financePosibilityArray,
  guaranteeArray,
  mainCategoryCreate,
  mainCategoryObj,
  operationDistanceArray,
} from '../../utils';
import { BiChevronDown } from 'react-icons/bi';
import LoadingBox from '../../components/LoadingBox';
import './create.css';

const createToastSuccess = () =>
  toast.success('Product successfully created!');
const createToastFail = () =>
  toast.error('Sorry! Product unsuccessfully created!');
const createToastMaxLimit = () => toast('Max limit is 10MB on each file!');

export default function CreateServicesCompanyEquipment(props) {
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('servicesCompanyEquipment');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [experience, setExperience] = useState('');
  const [operationDistance, setOperationDistance] = useState('');
  const [availability, setAvailability] = useState('');
  const [financePosibility, setFinancePosibility] = useState('');
  const [guarantee, setGuarantee] = useState('');
  const [emergencyService, setEmergencyService] = useState('');
  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryArray, setSubCategoryArray] = useState([]);
  const [mainCategorySelect, setMainCategorySelect] = useState(
    'servicesCompanyEquipment'
  );
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
    myForm.set('subCategory', subCategory);
    myForm.set('description', description);
    myForm.set('price', price);
    myForm.set('experience', experience); //servicesCompanyEquipment
    myForm.set('operationDistance', operationDistance);
    myForm.set('availability', availability);
    myForm.set('financePosibility', financePosibility);
    myForm.set('guarantee', guarantee);
    myForm.set('emergencyService', emergencyService);
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
    Object.entries(mainCategoryObj.servicesCompanyEquipment).map((item) => {
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
      >
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
                    to={'/createProduct/servicesCompanyEquipment'}
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
          {(categorySelect === 'transportRentServices' ||
            categorySelect === 'autoServicesTow' ||
            categorySelect === 'eventsWeddingsBaptisms' ||
            categorySelect === 'coursesMeditations' ||
            categorySelect === 'beautyServices' ||
            categorySelect === 'domesticAnimals' ||
            categorySelect === 'bicycleFitnessSupplements') && (
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
                        to={'/createProduct/servicesCompanyEquipment'}
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

        {/* ---------------------------------------------------------------------------servicesCompanyEquipment */}
        {mainCategorySelect === 'servicesCompanyEquipment' && (
          <div className="servicesCompanyEquipment-create-selectors">
            <section className="mainCategoryCreate">
              <label className="mb-1">Experience</label>
              <div className="dropdown" controlid="mainCategory">
                <button className="dropbtn" type="button">
                  {experience === ''
                    ? 'Select Experience'
                    : addUpperSpace(experience)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {experienceArray.map((c, index) => (
                    <Link
                      to={'/createProduct/servicesCompanyEquipment'}
                      onClick={() => {
                        setExperience(c);
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
              <label className="mb-1">Availability</label>
              <div className="dropdown" controlid="mainCategory">
                <button className="dropbtn" type="button">
                  {availability === ''
                    ? 'Select Availability'
                    : addUpperSpace(availability)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {availabilityArray.map((c, index) => (
                    <Link
                      to={'/createProduct/servicesCompanyEquipment'}
                      onClick={() => {
                        setAvailability(c);
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
              <label className="mb-1">Finance Posibility</label>
              <div className="dropdown" controlid="mainCategory">
                <button className="dropbtn" type="button">
                  {financePosibility === ''
                    ? 'Select Finance Posibility'
                    : addUpperSpace(financePosibility)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {financePosibilityArray.map((c, index) => (
                    <Link
                      to={'/createProduct/servicesCompanyEquipment'}
                      onClick={() => {
                        setFinancePosibility(c);
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
              <label className="mb-1">Guarantee</label>
              <div className="dropdown" controlid="mainCategory">
                <button className="dropbtn" type="button">
                  {guarantee === ''
                    ? 'Select Guarantee'
                    : addUpperSpace(guarantee)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {guaranteeArray.map((c, index) => (
                    <Link
                      to={'/createProduct/servicesCompanyEquipment'}
                      onClick={() => {
                        setGuarantee(c);
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
              <label className="mb-1">Emergency Service</label>
              <div className="dropdown" controlid="mainCategory">
                <button className="dropbtn" type="button">
                  {emergencyService === ''
                    ? 'Select Emergency Service'
                    : addUpperSpace(emergencyService)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {emergencyServiceArray.map((c, index) => (
                    <Link
                      to={'/createProduct/servicesCompanyEquipment'}
                      onClick={() => {
                        setEmergencyService(c);
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
            {categorySelect === 'transportRentServices' && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Operation Distance</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {operationDistance === ''
                      ? 'Select Operation Distance'
                      : addUpperSpace(operationDistance)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {operationDistanceArray.map((c, index) => (
                      <Link
                        to={'/createProduct/servicesCompanyEquipment'}
                        onClick={() => {
                          setOperationDistance(c);
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
