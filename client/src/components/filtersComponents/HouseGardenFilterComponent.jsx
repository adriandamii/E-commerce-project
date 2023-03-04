import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { conditionArray } from '../../utils';

const HouseGardenFilterComponent = (props) => {
  const {
    condition,
    getFilterUrl,
    mainCategory,
    subCategoryHouseAndGardenFinal,
    subCategory,
    category,
    addUpperSpace,
  } = props;
  return (
    <>
      {(category === 'furnitureDecorations' ||
        category === 'garden' ||
        category === 'constructionFurnitureMaterials' ||
        category === 'thermalElectricalSanitary' ||
        category === 'toolsWroughtIronWork') && (
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
              {subCategoryHouseAndGardenFinal.map((c, index) => (
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
      {mainCategory === 'houseAndGarden' && (
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
    </>
  );
};

export default HouseGardenFilterComponent;
