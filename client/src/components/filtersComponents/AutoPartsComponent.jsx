import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  tireSizeArray,
  tireWidthArray,
  tireProfileArray,
  tireSeasonArray,
  rimTypeArray,
  rimSizeArray,
  autoBrandsArray,
  chargeTypeArray,
  productTypeArray,
  mountTypeArray,
  conditionArray,
  useArray,
} from '../../utils';

function AutoPartsComponent(props) {
  const {
    getFilterUrl,
    subCategory,
    category,
    season,
    tireSize,
    tireWidth,
    tireProfile,
    rimType,
    rimSize,
    subCategoryAutoPartsFinal,
    brand,
    addUpperSpace,
    productType,
    chargeType,
    mountType,
    condition,
    whichFor,
  } = props;
  return (
    <>
      {category === 'wheelsRimsTires' && (
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
                {subCategoryAutoPartsFinal.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ subCategory: b, brand: 'all', condition: 'all' })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
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
                {conditionArray.map((s, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ condition: s })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(s)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {category === 'electricStations' && (
        <>
          <section className="mountType">
            <label className="mb-1">Mount Type</label>
            <div className="dropdown" controlid="mountType">
              <button className="dropbtn">
                {addUpperSpace(mountType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {mountTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ mountType: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="productType">
            <label className="mb-1">Product Type</label>
            <div className="dropdown" controlid="productType">
              <button className="dropbtn">
                {addUpperSpace(productType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {productTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ productType: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="chargeType">
            <label className="mb-1">Charging Type</label>
            <div className="dropdown" controlid="chargeType">
              <button className="dropbtn">
                {addUpperSpace(chargeType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {chargeTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ chargeType: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="use">
            <label className="mb-1">Use</label>
            <div className="dropdown" controlid="use">
              <button className="dropbtn">
                {addUpperSpace(whichFor)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {useArray.map((s, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ whichFor: s })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(s)}
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
                {conditionArray.map((s, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ condition: s })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(s)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {subCategory === 'tires' && (
        <>
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
                {tireSeasonArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ season: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="tireSize">
            <label className="mb-1">Tire Size</label>
            <div className="dropdown" controlid="tireSize">
              <button className="dropbtn">
                {addUpperSpace(tireSize)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {tireSizeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ tireSize: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="tireWidth">
            <label className="mb-1">Tire Width</label>
            <div className="dropdown" controlid="tireWidth">
              <button className="dropbtn">
                {addUpperSpace(tireWidth)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {tireWidthArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ tireWidth: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="tireProfile">
            <label className="mb-1">Tire Profile</label>
            <div className="dropdown" controlid="tireProfile">
              <button className="dropbtn">
                {addUpperSpace(tireProfile)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {tireProfileArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ tireProfile: b })}
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
      {subCategory === 'wheelsAndRims' && (
        <>
          <section className="rimType">
            <label className="mb-1">Rim Type</label>
            <div className="dropdown" controlid="rimType">
              <button className="dropbtn">
                {addUpperSpace(rimType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {rimTypeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ rimType: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(b)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="rimSize">
            <label className="mb-1">Rim Size</label>
            <div className="dropdown" controlid="rimSize">
              <button className="dropbtn">
                {addUpperSpace(rimSize)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {rimSizeArray.map((b, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ rimSize: b })}
                    style={{ textDecoration: 'none' }}
                  >
                    {b}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {(subCategory === 'wheelsAndRims' ||
        subCategory === 'tires' ||
        subCategory === 'accesories') && (
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
              {autoBrandsArray.map((b, index) => (
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
      )}
    </>
  );
}

export default AutoPartsComponent;
