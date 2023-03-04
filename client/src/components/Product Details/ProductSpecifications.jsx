import React from 'react';

const ProductDetails = (props) => {
  const { product } = props;

  const addUpperFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };

  return (
    <div className="product-specifications">
      {product.usefulSurface !== undefined && product.usefulSurface !== null ? (
        <div className="filter">
          <p className="key">Useful Surface</p>
          <p className="value">{product.usefulSurface}</p>
        </div>
      ) : null}
      {product.furnished !== undefined && product.furnished !== '' ? (
        <div className="filter">
          <p className="key">Furnished</p>
          <p className="value">{addUpperSpace(product.furnished)}</p>
        </div>
      ) : null}
      {product.groundType !== undefined && product.groundType !== '' ? (
        <div className="filter">
          <p className="key">Ground Type</p>
          <p className="value">{product.groundType}</p>
        </div>
      ) : null}
      {product.commerceType !== undefined && product.commerceType !== '' ? (
        <div className="filter">
          <p className="key">Commerce Type</p>
          <p className="value">{product.commerceType}</p>
        </div>
      ) : null}
      {product.rooms !== undefined && product.rooms !== '' ? (
        <div className="filter">
          <p className="key">Rooms</p>
          <p className="value">{addUpperSpace(product.rooms)}</p>
        </div>
      ) : null}
      {product.compartimentType !== undefined &&
      product.compartimentType !== '' ? (
        <div className="filter">
          <p className="key">Compartiment Type</p>
          <p className="value">{addUpperSpace(product.compartimentType)}</p>
        </div>
      ) : null}
      {product.floor !== undefined && product.floor !== '' ? (
        <div className="filter">
          <p className="key">Floor</p>
          <p className="value">{addUpperSpace(product.floor)}</p>
        </div>
      ) : null}
      {product.landArea !== undefined && product.landArea !== '' ? (
        <div className="filter">
          <p className="key">Land Area</p>
          <p className="value">
            {product.landArea !== undefined
              ? addUpperSpace(product.landArea)
              : null}
          </p>
        </div>
      ) : null}
      {product.builtArea !== undefined && product.builtArea !== '' ? (
        <div className="filter">
          <p className="key">Built Area</p>
          <p className="value">
            {product.builtArea !== undefined
              ? addUpperSpace(product.builtArea)
              : null}
          </p>
        </div>
      ) : null}
      {product.model !== undefined && product.model !== '' ? (
        <div className="filter">
          <p className="key">Model</p>
          <p className="value">
            {product.model !== undefined ? addUpperSpace(product.model) : null}
          </p>
        </div>
      ) : null}
      {product.km !== undefined && product.km !== null ? (
        <div className="filter">
          <p className="key">Km</p>
          <p className="value">{product.km}</p>
        </div>
      ) : null}
      {product.carosery !== undefined && product.carosery !== '' ? (
        <div className="filter">
          <p className="key">Carosery</p>
          <p className="value">
            {product.carosery !== undefined
              ? addUpperSpace(product.carosery)
              : null}
          </p>
        </div>
      ) : null}
      {product.fuel !== undefined && product.fuel !== '' ? (
        <div className="filter">
          <p className="key">Fuel</p>
          <p className="value">
            {product.fuel !== undefined ? addUpperSpace(product.fuel) : null}
          </p>
        </div>
      ) : null}
      {product.engine !== undefined && product.engine !== null ? (
        <div className="filter">
          <p className="key">Engine</p>
          <p className="value">{product.engine}</p>
        </div>
      ) : null}
      {product.year !== undefined && product.year !== null ? (
        <div className="filter">
          <p className="key">Year</p>
          <p className="value">{product.year}</p>
        </div>
      ) : null}
      {product.horsePower !== undefined && product.horsePower !== null ? (
        <div className="filter">
          <p className="key">Horse Power</p>
          <p className="value">{product.horsePower}</p>
        </div>
      ) : null}
      {product.steeringWheel !== undefined && product.steeringWheel !== '' ? (
        <div className="filter">
          <p className="key">Steering Wheel</p>
          <p className="value">
            {product.steeringWheel !== undefined
              ? addUpperSpace(product.steeringWheel)
              : null}
          </p>
        </div>
      ) : null}
      {product.usefulTask !== undefined && product.usefulTask !== '' ? (
        <div className="filter">
          <p className="key">Useful Task</p>
          <p className="value">
            {product.usefulTask !== undefined
              ? addUpperSpace(product.usefulTask)
              : null}
          </p>
        </div>
      ) : null}
      {product.rezolution !== undefined && product.rezolution !== '' ? (
        <div className="filter">
          <p className="key">Rezolution</p>
          <p className="value">
            {product.rezolution !== undefined
              ? addUpperSpace(product.rezolution)
              : null}
          </p>
        </div>
      ) : null}
      {product.memoryR !== undefined && product.memoryR !== '' ? (
        <div className="filter">
          <p className="key">MemoryR</p>
          <p className="value">
            {product.memoryR !== undefined
              ? addUpperSpace(product.memoryR)
              : null}
          </p>
        </div>
      ) : null}
      {product.videoType !== undefined && product.videoType !== '' ? (
        <div className="filter">
          <p className="key">Video Type</p>
          <p className="value">
            {product.videoType !== undefined
              ? addUpperSpace(product.videoType)
              : null}
          </p>
        </div>
      ) : null}
      {product.storageType !== undefined && product.storageType !== '' ? (
        <div className="filter">
          <p className="key">Storage Type</p>
          <p className="value">
            {product.storageType !== undefined
              ? addUpperFirst(product.storageType)
              : null}
          </p>
        </div>
      ) : null}
      {product.processorBrand !== undefined && product.processorBrand !== '' ? (
        <div className="filter">
          <p className="key">Processor Brand</p>
          <p className="value">
            {product.processorBrand !== undefined
              ? addUpperSpace(product.processorBrand)
              : null}
          </p>
        </div>
      ) : null}
      {product.size !== undefined && product.size !== '' ? (
        <div className="filter">
          <p className="key">Size</p>
          <p className="value">
            {product.size !== undefined ? addUpperSpace(product.size) : null}
          </p>
        </div>
      ) : null}
      {product.material !== undefined && product.material !== '' ? (
        <div className="filter">
          <p className="key">Material</p>
          <p className="value">
            {product.material !== undefined
              ? addUpperSpace(product.material)
              : null}
          </p>
        </div>
      ) : null}
      {product.season !== undefined && product.season !== '' ? (
        <div className="filter">
          <p className="key">Season</p>
          <p className="value">
            {product.season !== undefined
              ? addUpperSpace(product.season)
              : null}
          </p>
        </div>
      ) : null}
      {product.whichFor !== undefined && product.whichFor !== '' ? (
        <div className="filter">
          <p className="key">Which For</p>
          <p className="value">
            {product.whichFor !== undefined
              ? addUpperSpace(product.whichFor)
              : null}
          </p>
        </div>
      ) : null}
      {product.display !== undefined && product.display !== '' ? (
        <div className="filter">
          <p className="key">Display</p>
          <p className="value">
            {product.display !== undefined
              ? addUpperSpace(product.display)
              : null}
          </p>
        </div>
      ) : null}
      {product.waterResistance !== undefined &&
      product.waterResistance !== '' ? (
        <div className="filter">
          <p className="key">Water Resistance</p>
          <p className="value">
            {product.waterResistance !== undefined
              ? addUpperSpace(product.waterResistance)
              : null}
          </p>
        </div>
      ) : null}
      {product.caseMaterial !== undefined && product.caseMaterial !== '' ? (
        <div className="filter">
          <p className="key">Case Material</p>
          <p className="value">
            {product.caseMaterial !== undefined
              ? addUpperSpace(product.caseMaterial)
              : null}
          </p>
        </div>
      ) : null}
      {product.caseColour !== undefined && product.caseColour !== '' ? (
        <div className="filter">
          <p className="key">Case Colour</p>
          <p className="value">
            {product.caseColour !== undefined
              ? addUpperSpace(product.caseColour)
              : null}
          </p>
        </div>
      ) : null}
      {product.soleType !== undefined && product.soleType !== '' ? (
        <div className="filter">
          <p className="key">Sole Type</p>
          <p className="value">
            {product.soleType !== undefined
              ? addUpperSpace(product.soleType)
              : null}
          </p>
        </div>
      ) : null}
      {product.productType !== undefined && product.productType !== '' ? (
        <div className="filter">
          <p className="key">Product Type</p>
          <p className="value">
            {product.productType !== undefined
              ? addUpperSpace(product.productType)
              : null}
          </p>
        </div>
      ) : null}
      {product.chargeType !== undefined && product.chargeType !== '' ? (
        <div className="filter">
          <p className="key">Charge Type</p>
          <p className="value">
            {product.chargeType !== undefined
              ? addUpperSpace(product.chargeType)
              : null}
          </p>
        </div>
      ) : null}
      {product.mountType !== undefined && product.mountType !== '' ? (
        <div className="filter">
          <p className="key">Mount Type</p>
          <p className="value">
            {product.mountType !== undefined
              ? addUpperSpace(product.mountType)
              : null}
          </p>
        </div>
      ) : null}
      {product.tireSize !== undefined && product.tireSize !== '' ? (
        <div className="filter">
          <p className="key">Tire Size</p>
          <p className="value">
            {product.tireSize !== undefined
              ? addUpperSpace(product.tireSize)
              : null}
          </p>
        </div>
      ) : null}
      {product.tireWidth !== undefined && product.tireWidth !== '' ? (
        <div className="filter">
          <p className="key">Tire Width</p>
          <p className="value">
            {product.tireWidth !== undefined
              ? addUpperSpace(product.tireWidth)
              : null}
          </p>
        </div>
      ) : null}
      {product.tireProfile !== undefined && product.tireProfile !== '' ? (
        <div className="filter">
          <p className="key">Tire Profile</p>
          <p className="value">
            {product.tireProfile !== undefined
              ? addUpperSpace(product.tireProfile)
              : null}
          </p>
        </div>
      ) : null}
      {product.rimType !== undefined && product.rimType !== '' ? (
        <div className="filter">
          <p className="key">Rim Type</p>
          <p className="value">
            {product.rimType !== undefined
              ? addUpperSpace(product.rimType)
              : null}
          </p>
        </div>
      ) : null}
      {product.rimSize !== undefined && product.rimSize !== '' ? (
        <div className="filter">
          <p className="key">Rim Size</p>
          <p className="value">
            {product.rimSize !== undefined
              ? addUpperSpace(product.rimSize)
              : null}
          </p>
        </div>
      ) : null}
      {product.age !== undefined && product.age !== '' ? (
        <div className="filter">
          <p className="key">Age</p>
          <p className="value">
            {product.age !== undefined ? addUpperSpace(product.age) : null}
          </p>
        </div>
      ) : null}
      {product.experience !== undefined && product.experience !== '' ? (
        <div className="filter">
          <p className="key">Experience</p>
          <p className="value">
            {product.experience !== undefined
              ? addUpperSpace(product.experience)
              : null}
          </p>
        </div>
      ) : null}
      {product.operationDistance !== undefined &&
      product.operationDistance !== '' ? (
        <div className="filter">
          <p className="key">Operation Distance</p>
          <p className="value">
            {product.operationDistance !== undefined
              ? addUpperSpace(product.operationDistance)
              : null}
          </p>
        </div>
      ) : null}
      {product.availability !== undefined && product.availability !== '' ? (
        <div className="filter">
          <p className="key">Availability</p>
          <p className="value">
            {product.availability !== undefined
              ? addUpperSpace(product.availability)
              : null}
          </p>
        </div>
      ) : null}
      {product.financePosibility !== undefined &&
      product.financePosibility !== '' ? (
        <div className="filter">
          <p className="key">Finance Posibility</p>
          <p className="value">
            {product.financePosibility !== undefined
              ? addUpperSpace(product.financePosibility)
              : null}
          </p>
        </div>
      ) : null}
      {product.guarantee !== undefined && product.guarantee !== '' ? (
        <div className="filter">
          <p className="key">Guarantee</p>
          <p className="value">
            {product.guarantee !== undefined
              ? addUpperSpace(product.guarantee)
              : null}
          </p>
        </div>
      ) : null}
      {product.emergencyService !== undefined &&
      product.emergencyService !== '' ? (
        <div className="filter">
          <p className="key">Emergency Service</p>
          <p className="value">
            {product.emergencyService !== undefined
              ? addUpperSpace(product.emergencyService)
              : null}
          </p>
        </div>
      ) : null}
      {product.brand !== undefined && product.brand !== '' ? (
        <div className="filter">
          <p className="key">Brand</p>
          <p className="value">
            {product.brand !== undefined ? addUpperSpace(product.brand) : null}
          </p>
        </div>
      ) : null}
      {product.colour !== undefined && product.colour !== '' ? (
        <div className="filter">
          <p className="key">Colour</p>
          <p className="value">
            {product.colour !== undefined
              ? addUpperSpace(product.colour)
              : null}
          </p>
        </div>
      ) : null}
      {product.condition !== undefined && product.condition !== '' ? (
        <div className="filter">
          <p className="key">Condition</p>
          <p className="value">
            {product.condition !== undefined
              ? addUpperSpace(product.condition)
              : null}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
