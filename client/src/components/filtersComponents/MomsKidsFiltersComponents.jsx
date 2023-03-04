import React from 'react';
import { BiChevronDown} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  brandClothesArray,
  colourArray,
  conditionArray,
  ageArray,
} from '../../utils';
const MomsKidsFiltersComponents = (props) => {
  const {
    getFilterUrl,
    category,
    subCategory,
    colour,
    age,
    brand,
    condition,
    subCategoryMomsKidsFinal,
    addUpperSpace,
  } = props;

  return (
    <>
      {category === 'kidsClothesShoes' && (
        <>
          <section className="age">
            <label className="mb-1">Age</label>
            <div className="dropdown" controlid="age">
              <button className="dropbtn">
                {addUpperSpace(age)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {ageArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ age: c })}
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
      {(category === 'kidsClothesShoes' ||
        category === 'toWalk' ||
        category === 'babyRoom' ||
        category === 'foodCare') && (
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
              {subCategoryMomsKidsFinal.map((c, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ subCategory: c })}
                  style={{ textDecoration: 'none' }}
                >
                  {addUpperSpace(c)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {(category === 'kidsClothesShoes' ||
        category === 'pregnantsClothes' ||
        category === 'toys' ||
        category === 'toWalk'||
        category === 'babyRoom') && (
        <section className="condition">
          <label className="mb-1">Condition</label>
          <div className="dropdown" controlid="condition">
            <button className="dropbtn">
              {addUpperSpace(condition)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {conditionArray.map((c, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ condition: c })}
                  style={{ textDecoration: 'none' }}
                >
                  {addUpperSpace(c)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {(category === 'kidsClothesShoes' || category === 'pregnantsClothes') && (
        <>
          <section className="colour">
            <label className="mb-1">Colour</label>
            <div className="dropdown" controlid="colour">
              <button className="dropbtn">
                {addUpperSpace(colour)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {colourArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ colour: c })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="brand">
            <label className="mb-1">Brand</label>
            <div className="dropdown" controlid="brand">
              <button className="dropbtn">
                {addUpperSpace(brand)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {brandClothesArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ brand: c })}
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
    </>
  );
};

export default MomsKidsFiltersComponents;
