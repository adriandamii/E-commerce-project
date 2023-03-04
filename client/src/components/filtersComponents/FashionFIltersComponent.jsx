import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  brandShoesArray,
  brandClothesArray,
  caseColourArray,
  caseMaterialArray,
  colourArray,
  displayArray,
  materialArray,
  seasonArray,
  sizeClothesArray,
  sizeShoesArray,
  soleTypeArray,
  waterResistanceArray,
  whichForArray,
  conditionFashionArray,
  brandWatchesArray,
} from '../../utils';

const FashionFIltersComponent = (props) => {
  const {
    category,
    subCategoryFashionFinal,
    subCategory,
    addUpperFirst,
    getFilterUrl,
    colour,
    size,
    brand,
    material,
    season,
    display,
    whichFor,
    waterResistance,
    caseMaterial,
    caseColour,
    soleType,
    addUpperSpace,
    condition,
  } = props;

  return (
    <>
      {(category === 'wedding' ||
        category === 'womanClothes' ||
        category === 'womanShoes' ||
        category === 'manClothes' ||
        category === 'manShoes' ||
        category === 'watches') && (
        <>
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
                {subCategoryFashionFinal.map((c, index) => (
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
                {conditionFashionArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      condition: c,
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
        </>
      )}

      {(category === 'womanClothes' || category === 'manClothes') && (
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
                    to={getFilterUrl({
                      colour: c,
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
          <section className="size">
            <label className="mb-1">Size</label>
            <div className="dropdown" controlid="size">
              <button className="dropbtn">
                {addUpperFirst(size)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {sizeClothesArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      size: c,
                    })}
                    key={index}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperFirst(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="brand">
            <label className="mb-1">Brand</label>
            <div className="dropdown" controlid="brand">
              <button className="dropbtn">
                {addUpperFirst(brand)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {brandClothesArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ brand: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperFirst(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {(category === 'manShoes' || category === 'womanShoes') && (
        <>
          <section className="material">
            <label className="mb-1">Material</label>
            <div className="dropdown" controlid="material">
              <button className="dropbtn">
                {addUpperSpace(material)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {materialArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      material: c,
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
          <section className="season">
            <label className="mb-1">Season</label>
            <div className="dropdown" controlid="season">
              <button className="dropbtn">
                {addUpperSpace(season)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {seasonArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      season: c,
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
          <section className="size">
            <label className="mb-1">Size</label>
            <div className="dropdown" controlid="size">
              <button className="dropbtn">
                {addUpperSpace(size)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {sizeShoesArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      size: c,
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
                {brandShoesArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ brand: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {category === 'womanShoes' && (
        <>
          <section className="soleType">
            <label className="mb-1">Sole Type</label>
            <div className="dropdown" controlid="soleType">
              <button className="dropbtn">
                {addUpperSpace(soleType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {soleTypeArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      soleType: c,
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
        </>
      )}
      {category === 'wedding' && (
        <section className="whichFor">
          <label className="mb-1">Which For</label>
          <div className="dropdown" controlid="whichFor">
            <button className="dropbtn">
              {addUpperSpace(whichFor)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {whichForArray.map((c, index) => (
                <Link
                  to={getFilterUrl({
                    whichFor: c,
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
      {category === 'watches' && (
        <>
          <section className="display">
            <label className="mb-1">Display</label>
            <div className="dropdown" controlid="display">
              <button className="dropbtn">
                {addUpperSpace(display)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {displayArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      display: c,
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
          <section className="waterResistance">
            <label className="mb-1">Water Resistance</label>
            <div className="dropdown" controlid="waterResistance">
              <button className="dropbtn">
                {addUpperSpace(waterResistance)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {waterResistanceArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      waterResistance: c,
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
                {brandWatchesArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      brand: c,
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
          <section className="caseMaterial">
            <label className="mb-1">Material Case</label>
            <div className="dropdown" controlid="caseMaterial">
              <button className="dropbtn">
                {addUpperSpace(caseMaterial)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {caseMaterialArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      caseMaterial: c,
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
          <section className="caseColour">
            <label className="mb-1">Colour Case</label>
            <div className="dropdown" controlid="caseColour">
              <button className="dropbtn">
                {addUpperSpace(caseColour)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {caseColourArray.map((c, index) => (
                  <Link
                    to={getFilterUrl({
                      caseColour: c,
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
        </>
      )}
    </>
  );
};

export default FashionFIltersComponent;
