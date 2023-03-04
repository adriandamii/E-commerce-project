import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { ageAnimalsArray } from '../../utils';

const AnimalsFiltersComponent = (props) => {
  const {
    subCategoryAnimalsFinal,
    age,
    category,
    getFilterUrl,
    subCategory,
    addUpperSpace,
  } = props;
  return (
    <>
      {category === 'catsDogs' && (
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
              {subCategoryAnimalsFinal.map((c, index) => (
                <Link
                  to={getFilterUrl({
                    subCategory: c,
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
      {category === 'adoption' && (
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
              {ageAnimalsArray.map((c, index) => (
                <Link
                  to={getFilterUrl({
                    age: c,
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
    </>
  );
};

export default AnimalsFiltersComponent;
