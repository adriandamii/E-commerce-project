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
  brandAppliancesArray,
  brandTvArray,
  colourArray,
  compatibilityArray,
  conditionArray,
  laptopBrandArray,
  laptopProcesorBrandArray,
  mainCategoryObj,
  memoryRArray,
  nintendoArray,
  playstationArray,
  rezolutionArray,
  sizeDiagonalArray,
  storageTypeArray,
  videoTypeArray,
  xboxArray,
} from '../../utils';
import { BiChevronDown } from 'react-icons/bi';

const editToastFail = () =>
  toast.error('Sorry! Product unsuccessfully edited!');
const editToastSuccess = () => toast.success('Product successfully edited!');

const EditElectronicsAppliances = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryArray, setSubCategoryArray] = useState([]);
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('electronicsAppliances');
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [model, setModel] = useState('');
  const [whichFor, setWhichFor] = useState('');
  const [colour, setColour] = useState('');
  const [brand, setBrand] = useState('');
  const [memoryR, setMemoryR] = useState('');
  const [videoType, setVideoType] = useState('');
  const [storageType, setStorageType] = useState('');
  const [processorBrand, setProcessorBrand] = useState('');
  const [rezolution, setRezolution] = useState('');
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
      setCondition(product.condition);
      setPrice(product.price);
      setDescription(product.description);
      setSize(product.size);
      setModel(product.model);
      setWhichFor(product.whichFor);
      setColour(product.colour);
      setBrand(product.brand);
      setMemoryR(product.memoryR);
      setVideoType(product.videoType);
      setStorageType(product.storageType);
      setProcessorBrand(product.processorBrand);
      setRezolution(product.rezolution);
      setOldImages(product.images);
    }
  }, [product, dispatch, id, successUpdate, navigate, errorUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('mainCategory', mainCategory);
    myForm.set('condition', condition);
    myForm.set('category', category);
    myForm.set('subCategory', subCategory);
    myForm.set('description', description);
    myForm.set('price', price);
    myForm.set('size', size);
    myForm.set('model', model);
    myForm.set('whichFor', whichFor);
    myForm.set('colour', colour);
    myForm.set('brand', brand);
    myForm.set('memoryR', memoryR);
    myForm.set('videoType', videoType);
    myForm.set('storageType', storageType);
    myForm.set('processorBrand', processorBrand);
    myForm.set('rezolution', rezolution);

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
  const addUpperFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

    Object.entries(mainCategoryObj.electronicsAppliances).map((item) => {
      if (item[0] === category) {
        console.log(Object.getOwnPropertyNames(item[1]));
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
              <button className="dropbtn">
                {addUpperSpace(category)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {categoryArray.map((c, index) => (
                  <Link
                    to={`/${id}/editProduct/electronicsAppliances`}
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
          {(category === 'phones' ||
            category === 'TV' ||
            category === 'appliances' ||
            category === 'tabletsAndReaders' ||
            category === 'phonesTabletsParts' ||
            category === 'videoProiection' ||
            category === 'webAndServers' ||
            category === 'laptopPcGaming' ||
            category === 'phonesTabletsAccesories') && (
            <>
              <section className="mainCategoryCreate">
                <label className="mb-1">Sub Category</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn">
                    {addUpperSpace(subCategory)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {subCategoryArray.map((sc, index) => (
                      <Link
                        to={`/${id}/editProduct/electronicsAppliances`}
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
        {mainCategory === 'electronicsAppliances' && (
          <div className="electronicsAppliances-edit-selectors">
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
                      to={`/${id}/editProduct/electronicsAppliances`}
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
            {subCategory === 'TV' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Brand</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(brand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {brandTvArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
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
                  <label className="mb-1">Rezolution</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(rezolution)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {rezolutionArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
                          onClick={() => {
                            setRezolution(c);
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
            {category === 'phones' && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Colour</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {colour === '' ? 'Select Colour' : addUpperSpace(colour)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {colourArray.map((c, index) => (
                      <Link
                        to={'/createProduct/electronicsAppliances'}
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
            )}
            {subCategory === 'laptop' && (
              <>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Brand</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(brand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {laptopBrandArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
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
                  <label className="mb-1">Size</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(size)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {sizeDiagonalArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
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
                  <label className="mb-1">Memory Ram</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(memoryR)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {memoryRArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
                          onClick={() => {
                            setMemoryR(c);
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
                  <label className="mb-1">Video Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(videoType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {videoTypeArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
                          onClick={() => {
                            setVideoType(c);
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
                  <label className="mb-1">Storage Type</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(storageType)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {storageTypeArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
                          onClick={() => {
                            setStorageType(c);
                          }}
                          key={index}
                          style={{ textDecoration: 'none' }}
                        >
                          {addUpperFirst(c)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="mainCategoryCreate">
                  <label className="mb-1">Processor Brand</label>
                  <div className="dropdown" controlid="mainCategory">
                    <button className="dropbtn" type="button">
                      {addUpperSpace(processorBrand)}
                      <span>
                        <BiChevronDown className="icon-style" />
                      </span>
                    </button>
                    <div className="dropdown-content">
                      {laptopProcesorBrandArray.map((c, index) => (
                        <Link
                          to={`/${id}/editProduct/electronicsAppliances`}
                          onClick={() => {
                            setProcessorBrand(c);
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
            {subCategory === 'consoleAccesories' && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Compatibility</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {addUpperSpace(whichFor)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {compatibilityArray.map((c, index) => (
                      <Link
                        to={`/${id}/editProduct/electronicsAppliances`}
                        onClick={() => {
                          setWhichFor(c);
                        }}
                        key={index}
                        style={{ textDecoration: 'none' }}
                      >
                        {addUpperFirst(c)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {subCategory === 'Playstation' && (
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
                    {playstationArray.map((c, index) => (
                      <Link
                        to={`/${id}/editProduct/electronicsAppliances`}
                        onClick={() => {
                          setModel(c);
                        }}
                        key={index}
                        style={{ textDecoration: 'none' }}
                      >
                        {addUpperFirst(c)}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {subCategory === 'NintendoWii' && (
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
                    {nintendoArray.map((c, index) => (
                      <Link
                        to={`/${id}/editProduct/electronicsAppliances`}
                        onClick={() => {
                          setModel(c);
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
            {subCategory === 'Xbox' && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Model</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {model}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {xboxArray.map((c, index) => (
                      <Link
                        to={`/${id}/editProduct/electronicsAppliances`}
                        onClick={() => {
                          setModel(c);
                        }}
                        key={index}
                        style={{ textDecoration: 'none' }}
                      >
                        {c}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {category === 'appliances' && (
              <section className="mainCategoryCreate">
                <label className="mb-1">Brand</label>
                <div className="dropdown" controlid="mainCategory">
                  <button className="dropbtn" type="button">
                    {addUpperSpace(brand)}
                    <span>
                      <BiChevronDown className="icon-style" />
                    </span>
                  </button>
                  <div className="dropdown-content">
                    {brandAppliancesArray.map((c, index) => (
                      <Link
                        to={`/${id}/editProduct/electronicsAppliances`}
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

export default EditElectronicsAppliances;
