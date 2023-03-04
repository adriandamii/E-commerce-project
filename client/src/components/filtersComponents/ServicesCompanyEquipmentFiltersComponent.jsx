import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  guaranteeArray,
  availabilityArray,
  experienceArray,
  operationDistanceArray,
  financePosibilityArray,
  emergencyServiceArray,
  autoServicesArray,
} from '../../utils';

const ServicesCompanyEquipmentFiltersComponent = (props) => {
  const {
    subCategoryServicesCompanyEquipmentFinal,
    subCategory,
    experience,
    operationDistance,
    availability,
    financePosibility,
    guarantee,
    emergencyService,
    getFilterUrl,
    category,
    whichFor,
    addUpperSpace,
  } = props;
  return (
    <>
      {(category === 'transportRentServices' ||
        category === 'autoServicesTow' ||
        category === 'eventsWeddingsBaptisms' ||
        category === 'coursesMeditations' ||
        category === 'beautyServices') && (
        <section className="subCategory">
          <label className="mb-1">Sub Category</label>
          <div className="dropdown" controlid="subCategory">
            <button className="dropbtn">
              {addUpperSpace(subCategory)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {subCategoryServicesCompanyEquipmentFinal.map((b, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ subCategory: b })}
                  style={{ textDecoration: 'none' }}
                >
                  {addUpperSpace(b)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {subCategory === 'autoServices' && (
        <section className="serviceType">
          <label className="mb-1">Service type</label>
          <div className="dropdown" controlid="serviceType">
            <button className="dropbtn">
              {addUpperSpace(whichFor)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {autoServicesArray.map((c, index) => (
                <Link
                  to={getFilterUrl({
                    serviceType: c,
                  })}
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
      {(category === 'transportRentServices' ||
        category === 'autoServicesTow') && (
        <>
          <section className="experience">
            <label className="mb-1">Experience</label>
            <div className="dropdown" controlid="experience">
              <button className="dropbtn">
                {addUpperSpace(experience)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {experienceArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ experience: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="availability">
            <label className="mb-1">Availability</label>
            <div className="dropdown" controlid="availability">
              <button className="dropbtn">
                {addUpperSpace(availability)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {availabilityArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ availability: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="guarantee">
            <label className="mb-1">Guarantee</label>
            <div className="dropdown" controlid="guarantee">
              <button className="dropbtn">
                {addUpperSpace(guarantee)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {guaranteeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ guarantee: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="financePosibility">
            <label className="mb-1">Finance Posibility</label>
            <div className="dropdown" controlid="financePosibility">
              <button className="dropbtn">
                {addUpperSpace(financePosibility)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {financePosibilityArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ financePosibility: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="emergencyService">
            <label className="mb-1">Emergency Service</label>
            <div className="dropdown" controlid="emergencyService">
              <button className="dropbtn">
                {addUpperSpace(emergencyService)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {emergencyServiceArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ emergencyService: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          {category === 'transportRentServices' && (
            <section className="operationDistance">
              <label className="mb-1">Operation Distance</label>
              <div className="dropdown" controlid="operationDistance">
                <button className="dropbtn">
                  {addUpperSpace(operationDistance)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {operationDistanceArray.map((b, index) => (
                    <Link
                      key={index}
                      to={getFilterUrl({ operationDistance: b })}
                      style={{ textDecoration: 'none' }}
                    >
                      {addUpperSpace(b)}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default ServicesCompanyEquipmentFiltersComponent;
