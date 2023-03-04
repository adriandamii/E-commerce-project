import React from 'react';
import { Link } from 'react-router-dom';
import { mainCategoryArr } from '../../utils';

const NavBottomCategories = () => {
  return (
    <>
      <div className="categories-nav-modal">
        {mainCategoryArr.map(({ value, name, id, im }) => (
          <Link
            to={`/filters/pageNumber/1/mainCategory/${value}/name/all/category/all/subCategory/all/model/all/steeringWheel/all/carosery/all/colour/all/condition/all/fuel/all/minPrice/0/maxPrice/0/minYear/0/maxYear/0/minKm/0/maxKm/0/minEngine/0/maxEngine/0/minHorsePower/0/maxHorsePower/0/furnished/all/rooms/all/minUsefulSurface/0/maxUsefulSurface/0/groundType/all/commerceType/all/brand/all/rezolution/all/usefulTask/all/size/all/material/all/season/all/display/all/whichFor/all/waterResistance/all/caseMaterial/all/caseColour/all/soleType/all/floor/all/minLandArea/0/maxLandArea/0/minBuiltArea/0/maxBuiltArea/0/compartimentType/all/productType/all/chargeType/all/mountType/all/tireSize/all/tireWidth/all/tireProfile/all/rimType/all/rimSize/all/age/all/experience/all/operationDistance/all/availability/all/financePosibility/all/guarantee/all/emergencyService/all/memoryR/all/videoType/all/storageType/all/processorBrand/all`}
            key={id}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {im} {name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBottomCategories;
