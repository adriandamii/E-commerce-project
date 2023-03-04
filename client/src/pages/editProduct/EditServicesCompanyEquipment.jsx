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
  availabilityArray,
  emergencyServiceArray,
  experienceArray,
  financePosibilityArray,
  guaranteeArray,
  mainCategoryObj,
  operationDistanceArray,
} from '../../utils';
import { BiChevronDown } from 'react-icons/bi';

const editToastFail = () =>
  toast.error('Sorry! Product unsuccessfully edited!');
const editToastSuccess = () => toast.success('Product successfully edited!');

const EditServicesCompanyEquipment = (props) => {
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryArray, setSubCategoryArray] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('');
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
      setSubCategory(product.subCategory);
      setPrice(product.price);
      setDescription(product.description);
      setExperience(product.experience);
      setOperationDistance(product.operationDistance);
      setAvailability(product.availability);
      setFinancePosibility(product.financePosibility);
      setGuarantee(product.guarantee);
      setEmergencyService(product.emergencyService);
      setOldImages(product.images);
    }
  }, [product, dispatch, id, successUpdate, navigate, errorUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('mainCategory', mainCategory);
    myForm.set('category', category);
    myForm.set('subCategory', subCategory);
    myForm.set('description', description);
    myForm.set('price', price);
    myForm.set('experience', experience);
    myForm.set('operationDistance', operationDistance);
    myForm.set('availability', availability);
    myForm.set('financePosibility', financePosibility);
    myForm.set('guarantee', guarantee);
    myForm.set('emergencyService', emergencyService);
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
    Object.entries(mainCategoryObj.servicesCompanyEquipment).map((item) => {
      if (item[0] === category) {
        setSubCategoryArray(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
  }, [mainCategory, category, subCategory]);

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
                    to={`/${id}/editProduct/servicesCompanyEquipment`}
                    onClick={() => {
                      setSubCategory('-');
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
          {(category === 'transportRentServices' ||
            category === 'autoServicesTow' ||
            category === 'eventsWeddingsBaptisms' ||
            category === 'coursesMeditations' ||
            category === 'beautyServices' ||
            category === 'domesticAnimals' ||
            category === 'bicycleFitnessSupplements') && (
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
                        to={`/${id}/editProduct/servicesCompanyEquipment`}
                        onClick={() => {
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
        {mainCategory === 'servicesCompanyEquipment' && (
          <div className="servicesCompanyEquipment-edit-selectors">
            <section className="mainCategoryCreate">
              <label className="mb-1">Experience</label>
              <div className="dropdown" controlid="mainCategory">
                <button className="dropbtn" type="button">
                  {addUpperSpace(experience)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {experienceArray.map((c, index) => (
                    <Link
                      to={`/${id}/editProduct/servicesCompanyEquipment`}
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
                  {addUpperSpace(availability)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {availabilityArray.map((c, index) => (
                    <Link
                      to={`/${id}/editProduct/servicesCompanyEquipment`}
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
                  {addUpperSpace(financePosibility)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {financePosibilityArray.map((c, index) => (
                    <Link
                      to={`/${id}/editProduct/servicesCompanyEquipment`}
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
                  {addUpperSpace(guarantee)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {guaranteeArray.map((c, index) => (
                    <Link
                      to={`/${id}/editProduct/servicesCompanyEquipment`}
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
                  {addUpperSpace(emergencyService)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {emergencyServiceArray.map((c, index) => (
                    <Link
                      to={`/${id}/editProduct/servicesCompanyEquipment`}
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
            {category === 'transportRentServices' && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Operation Distance</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {addUpperSpace(operationDistance)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {operationDistanceArray.map((c, index) => (
                      <Link
                        to={`/${id}/editProduct/servicesCompanyEquipment`}
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

export default EditServicesCompanyEquipment;
