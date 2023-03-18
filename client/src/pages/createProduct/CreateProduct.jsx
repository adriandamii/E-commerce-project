import React, {  useState } from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  mainCategoryCreate,
} from '../../utils';
import { BiChevronDown } from 'react-icons/bi';
import './create.css';

export default function CreateProduct(props) {
  const [mainCategorySelect, setMainCategorySelect] =
    useState('Select Category');
  
   // const addUpperFirst = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };
  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };
 

  return (
    <div className="form-container">
      <Helmet>
        <title>Create Product</title>
      </Helmet>
      <h1 className="title">Create Product</h1>
      <Form
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
        </div>
      </Form>
    </div>
  );
}
