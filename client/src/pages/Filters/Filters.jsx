import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../../actions/productAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import Product from '../../components/Product/Product';
import { Helmet } from 'react-helmet-async';
import { PRODUCT_DELETE_RESET } from '../../constants/productConstants';
import { BiX, BiChevronDown } from 'react-icons/bi';
import { priceArray, mainCategoryObj, mainCategoryArr } from '../../utils';
import AutoMotoBoatsFiltersComponent from '../../components/filtersComponents/AutoMotoBoatsFiltersComponent';
import RealEstateFiltersComponent from '../../components/filtersComponents/RealEstateFiltersComponent';
import ElectronicFiltersComponent from '../../components/filtersComponents/ElectronicFiltersComponent';
import FashionFIltersComponent from '../../components/filtersComponents/FashionFIltersComponent';
import AutoPartsComponent from '../../components/filtersComponents/AutoPartsComponent';
import HouseGardenFilterComponent from '../../components/filtersComponents/HouseGardenFilterComponent';
import MomsKidsFiltersComponents from '../../components/filtersComponents/MomsKidsFiltersComponents';
import SportFreeTimeArtFilterComponent from '../../components/filtersComponents/SportFreeTimeArtFilterComponent';
import AnimalsFiltersComponent from '../../components/filtersComponents/AnimalsFiltersComponent';
import AgroIndustryFiltersComponent from '../../components/filtersComponents/AgroIndustryFiltersComponent';
import ServicesCompanyEquipmentFiltersComponent from '../../components/filtersComponents/ServicesCompanyEquipmentFiltersComponent';
// import HiddenNavHome from '../../components/Hidden Navs/Home Hidden Nav/HomeHiddenNav';
import './filters.css';

export default function Filters() {
  const [categoryFinal, setCategoryFinal] = useState([]);
  const [subCategoryAutoFinal, setSubCategoryAutoFinal] = useState([]);
  const [subCategoryElectronicFinal, setSubCategoryElectronicFinal] = useState(
    []
  );
  const [subCategoryAnimalsFinal, setSubCategoryAnimalsFinal] = useState([]);
  const [subCategoryAutoPartsFinal, setSubCategoryAutoPartsFinal] = useState(
    []
  );
  const [subCategoryAgroIndustryFinal, setSubCategoryAgroIndustryFinal] =
    useState([]);
  const [subCategoryHouseAndGardenFinal, setSubCategoryHouseAndGardenFinal] =
    useState([]);
  const [subCategoryMomsKidsFinal, setSubCategoryMomsKidsFinal] = useState([]);
  const [
    subCategorySportFreeTimeArtFinal,
    setSubCategorySportFreeTimeArtFinal,
  ] = useState([]);
  const [
    subCategoryServicesCompanyEquipmentFinal,
    setSubCategoryServicesCompanyEquipmentFinal,
  ] = useState([]);
  const [subCategoryFashionFinal, setSubCategoryFashionFinal] = useState([]);
  const [minPriceSelected, setMinPriceSelected] = useState('From');
  const [maxPriceSelected, setMaxPriceSelected] = useState('To');
  const [modelFinal, setModelAutoFinal] = useState([]);
  const {
    pageNumber = 1,
    name = 'all',
    mainCategory = 'all',
    category = 'all',
    subCategory = 'all',
    model = 'all',
    carosery = 'all',
    fuel = 'all',
    steeringWheel = 'all',
    colour = 'all',
    condition = 'all',
    furnished = 'all',
    rooms = 'all',
    groundType = 'all',
    commerceType = 'all',
    brand = 'all',
    rezolution = 'all',
    usefulTask = 'all',
    size = 'all',
    material = 'all',
    season = 'all',
    display = 'all',
    whichFor = 'all',
    waterResistance = 'all',
    caseMaterial = 'all',
    caseColour = 'all',
    soleType = 'all',
    floor = 'all',
    compartimentType = 'all',
    productType = 'all',
    chargeType = 'all',
    mountType = 'all',
    tireSize = 'all',
    tireWidth = 'all',
    tireProfile = 'all',
    rimType = 'all',
    rimSize = 'all',
    age = 'all',
    experience = 'all',
    operationDistance = 'all',
    availability = 'all',
    financePosibility = 'all',
    guarantee = 'all',
    emergencyService = 'all',
    memoryR = 'all',
    videoType = 'all',
    storageType = 'all',
    processorBrand = 'all',
    minLandArea = 0,
    maxLandArea = 0,
    minBuiltArea = 0,
    maxBuiltArea = 0,
    minUsefulSurface = 0,
    maxUsefulSurface = 0,
    minYear = 0,
    maxYear = 0,
    minKm = 0,
    maxKm = 0,
    minEngine = 0,
    maxEngine = 0,
    minHorsePower = 0,
    maxHorsePower = 0,
    minPrice = 0,
    maxPrice = 0,
    
  } = useParams();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const {
    loading,
    error,
    products,
    //count
    page, 
    pages,
  } = productsList;
  
  const deletedProduct = useSelector((state) => state.deletedProduct);
  const {
    //error: errorDelete,
    success: successDelete,
  } = deletedProduct;

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      getProducts({
        pageNumber,
        name: name !== 'all' ? name : '',
        mainCategory: mainCategory !== 'all' ? mainCategory : '',
        category: category !== 'all' ? category : '',
        subCategory: subCategory !== 'all' ? subCategory : '',
        model: model !== 'all' ? model : '',
        steeringWheel: steeringWheel !== 'all' ? steeringWheel : '',
        carosery: carosery !== 'all' ? carosery : '',
        colour: colour !== 'all' ? colour : '',
        condition: condition !== 'all' ? condition : '',
        fuel: fuel !== 'all' ? fuel : '',
        furnished: furnished !== 'all' ? furnished : '',
        rooms: rooms !== 'all' ? rooms : '',
        groundType: groundType !== 'all' ? groundType : '',
        commerceType: commerceType !== 'all' ? commerceType : '',
        brand: brand !== 'all' ? brand : '',
        rezolution: rezolution !== 'all' ? rezolution : '',
        usefulTask: usefulTask !== 'all' ? usefulTask : '',
        size: size !== 'all' ? size : '',
        material: material !== 'all' ? material : '',
        season: season !== 'all' ? season : '',
        display: display !== 'all' ? display : '',
        whichFor: whichFor !== 'all' ? whichFor : '',
        waterResistance: waterResistance !== 'all' ? waterResistance : '',
        caseMaterial: caseMaterial !== 'all' ? caseMaterial : '',
        caseColour: caseColour !== 'all' ? caseColour : '',
        soleType: soleType !== 'all' ? soleType : '',
        floor: floor !== 'all' ? floor : '',
        compartimentType: compartimentType !== 'all' ? compartimentType : '',
        productType: productType !== 'all' ? productType : '',
        chargeType: chargeType !== 'all' ? chargeType : '',
        mountType: mountType !== 'all' ? mountType : '',
        tireSize: tireSize !== 'all' ? tireSize : '',
        tireWidth: tireWidth !== 'all' ? tireWidth : '',
        tireProfile: tireProfile !== 'all' ? tireProfile : '',
        rimType: rimType !== 'all' ? rimType : '',
        rimSize: rimSize !== 'all' ? rimSize : '',
        age: age !== 'all' ? age : '',
        experience: experience !== 'all' ? experience : '',
        operationDistance: operationDistance !== 'all' ? operationDistance : '',
        availability: availability !== 'all' ? availability : '',
        financePosibility: financePosibility !== 'all' ? financePosibility : '',
        guarantee: guarantee !== 'all' ? guarantee : '',
        emergencyService: emergencyService !== 'all' ? emergencyService : '',
        memoryR: memoryR !== 'all' ? memoryR : '',
        videoType: videoType !== 'all' ? videoType : '',
        storageType: storageType !== 'all' ? storageType : '',
        processorBrand: processorBrand !== 'all' ? processorBrand : '',
        minLandArea,
        maxLandArea,
        minBuiltArea,
        maxBuiltArea,
        minUsefulSurface,
        maxUsefulSurface,
        minYear,
        maxYear,
        minKm,
        maxKm,
        minEngine,
        maxEngine,
        minHorsePower,
        maxHorsePower,
        minPrice,
        maxPrice,
      })
    );
  }, [
    dispatch,
    name,
    mainCategory,
    category,
    subCategory,
    model,
    steeringWheel,
    carosery,
    furnished,
    rooms,
    brand,
    usefulTask,
    rezolution,
    groundType,
    commerceType,
    minUsefulSurface,
    maxUsefulSurface,
    colour,
    successDelete,
    condition,
    fuel,
    size,
    material,
    season,
    display,
    whichFor,
    waterResistance,
    caseMaterial,
    caseColour,
    soleType,
    floor,
    compartimentType,
    productType,
    chargeType,
    mountType,
    tireSize,
    tireWidth,
    tireProfile,
    rimType,
    rimSize,
    age,
    experience,
    operationDistance,
    availability,
    financePosibility,
    guarantee,
    emergencyService,
    memoryR,
    videoType,
    storageType,
    processorBrand,
    minLandArea,
    maxLandArea,
    minBuiltArea,
    maxBuiltArea,
    minYear,
    maxYear,
    minKm,
    maxKm,
    minEngine,
    maxEngine,
    minHorsePower,
    maxHorsePower,
    minPrice,
    maxPrice,
    pageNumber,
  ]);
  
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterMainCategory = filter.mainCategory || mainCategory;
    const filterCategory = filter.category || category;
    const filterSubCategory = filter.subCategory || subCategory;
    const filterModel = filter.model || model;
    const filterSteeringWheel = filter.steeringWheel || steeringWheel;
    const filterCarosery = filter.carosery || carosery;
    const filterColour = filter.colour || colour;
    const filterCondition = filter.condition || condition;
    const filterGroundType = filter.groundType || groundType;
    const filterCommerceType = filter.commerceType || commerceType;
    const filterBrand = filter.brand || brand;
    const filterRezolution = filter.rezolution || rezolution;
    const filterUsefulTask = filter.usefulTask || usefulTask;
    const filterName = filter.name || name;
    const filterFuel = filter.fuel || fuel;
    const filterFurnished = filter.furnished || furnished;
    const filterRooms = filter.rooms || rooms;
    const filterSize = filter.size || size;
    const filterMaterial = filter.material || material;
    const filterSeason = filter.season || season;
    const filterDisplay = filter.display || display;
    const filterWhichFor = filter.whichFor || whichFor;
    const filterWaterResistance = filter.waterResistance || waterResistance;
    const filterCaseMaterial = filter.caseMaterial || caseMaterial;
    const filterCaseColour = filter.caseColour || caseColour;
    const filterSoleType = filter.soleType || soleType;
    const filterFloor = filter.floor || floor;
    const filterCompartimentType = filter.compartimentType || compartimentType;
    const filterProductType = filter.productType || productType;
    const filterChargeType = filter.chargeType || chargeType;
    const filterMountType = filter.mountType || mountType;
    const filterTireSize = filter.tireSize || tireSize;
    const filterTireWidth = filter.tireWidth || tireWidth;
    const filterTireProfile = filter.tireProfile || tireProfile;
    const filterRimType = filter.rimType || rimType;
    const filterRimSize = filter.rimSize || rimSize;
    const filterAge = filter.age || age;
    const filterExperience = filter.experience || experience;
    const filterOperationDistance =
      filter.operationDistance || operationDistance;
    const filterAvailability = filter.availability || availability;
    const filterFinancePosibility =
      filter.financePosibility || financePosibility;
    const filterGuarantee = filter.guarantee || guarantee;
    const filterEmergencyService = filter.emergencyService || emergencyService;
    const filterMemoryR = filter.memoryR || memoryR;
    const filterVideoType = filter.videoType || videoType;
    const filterStorageType = filter.storageType || storageType;
    const filterProcessorBrand = filter.processorBrand || processorBrand;

    const filterMinUsefulSurface = filter.minUsefulSurface
      ? filter.minUsefulSurface
      : filter.minUsefulSurface === 0
      ? 0
      : minUsefulSurface;
    const filterMaxUsefulSurface = filter.maxUsefulSurface
      ? filter.maxUsefulSurface
      : filter.maxUsefulSurface === 0
      ? 0
      : maxUsefulSurface;
    const filterMinPrice = filter.minPrice
      ? filter.minPrice
      : filter.minPrice === 0
      ? 0
      : minPrice;
    const filterMaxPrice = filter.maxPrice
      ? filter.maxPrice
      : filter.maxPrice === 0
      ? 0
      : maxPrice;

    const filterMinYear = filter.minYear
      ? filter.minYear
      : filter.minYear === 0
      ? 0
      : minYear;
    const filterMaxYear = filter.maxYear
      ? filter.maxYear
      : filter.maxYear === 0
      ? 0
      : maxYear;

    const filterMinKm = filter.minKm
      ? filter.minKm
      : filter.minKm === 0
      ? 0
      : minKm;
    const filterMaxKm = filter.maxKm
      ? filter.maxKm
      : filter.maxKm === 0
      ? 0
      : maxKm;

    const filterMinEngine = filter.minEngine
      ? filter.minEngine
      : filter.minEngine === 0
      ? 0
      : minEngine;
    const filterMaxEngine = filter.maxEngine
      ? filter.maxEngine
      : filter.maxEngine === 0
      ? 0
      : maxEngine;

    const filterMinHorsePower = filter.minHorsePower
      ? filter.minHorsePower
      : filter.minHorsePower === 0
      ? 0
      : minHorsePower;
    const filterMaxHorsePower = filter.maxHorsePower
      ? filter.maxHorsePower
      : filter.maxHorsePower === 0
      ? 0
      : maxHorsePower;

    const filterMinLandArea = filter.minLandArea
      ? filter.minLandArea
      : filter.minLandArea === 0
      ? 0
      : minLandArea;
    const filterMaxLandArea = filter.maxLandArea
      ? filter.maxLandArea
      : filter.maxLandArea === 0
      ? 0
      : maxLandArea;

    const filterMinBuiltArea = filter.minBuiltArea
      ? filter.minBuiltArea
      : filter.minBuiltArea === 0
      ? 0
      : minBuiltArea;
    const filterMaxBuiltArea = filter.maxBuiltArea
      ? filter.maxBuiltArea
      : filter.maxBuiltArea === 0
      ? 0
      : maxBuiltArea;

    return `/filters/pageNumber/${filterPage}/mainCategory/${filterMainCategory}/name/${filterName}/category/${filterCategory}/subCategory/${filterSubCategory}/model/${filterModel}/steeringWheel/${filterSteeringWheel}/carosery/${filterCarosery}/colour/${filterColour}/condition/${filterCondition}/fuel/${filterFuel}/minPrice/${filterMinPrice}/maxPrice/${filterMaxPrice}/minYear/${filterMinYear}/maxYear/${filterMaxYear}/minKm/${filterMinKm}/maxKm/${filterMaxKm}/minEngine/${filterMinEngine}/maxEngine/${filterMaxEngine}/minHorsePower/${filterMinHorsePower}/maxHorsePower/${filterMaxHorsePower}/furnished/${filterFurnished}/rooms/${filterRooms}/minUsefulSurface/${filterMinUsefulSurface}/maxUsefulSurface/${filterMaxUsefulSurface}/groundType/${filterGroundType}/commerceType/${filterCommerceType}/brand/${filterBrand}/rezolution/${filterRezolution}/usefulTask/${filterUsefulTask}/size/${filterSize}/material/${filterMaterial}/season/${filterSeason}/display/${filterDisplay}/whichFor/${filterWhichFor}/waterResistance/${filterWaterResistance}/caseMaterial/${filterCaseMaterial}/caseColour/${filterCaseColour}/soleType/${filterSoleType}/floor/${filterFloor}/minLandArea/${filterMinLandArea}/maxLandArea/${filterMaxLandArea}/minBuiltArea/${filterMinBuiltArea}/maxBuiltArea/${filterMaxBuiltArea}/compartimentType/${filterCompartimentType}/productType/${filterProductType}/chargeType/${filterChargeType}/mountType/${filterMountType}/tireSize/${filterTireSize}/tireWidth/${filterTireWidth}/tireProfile/${filterTireProfile}/rimType/${filterRimType}/rimSize/${filterRimSize}/age/${filterAge}/experience/${filterExperience}/operationDistance/${filterOperationDistance}/availability/${filterAvailability}/financePosibility/${filterFinancePosibility}/guarantee/${filterGuarantee}/emergencyService/${filterEmergencyService}/memoryR/${filterMemoryR}/videoType/${filterVideoType}/storageType/${filterStorageType}/processorBrand/${filterProcessorBrand}`;
  };

  // const addCommaUpperSpace = (str) => {
  //   str = str.charAt(0).toUpperCase() + str.slice(1);
  //   return str
  //     .replace(/[A-Z]/g, ', $&')
  //     .trim()
  //     .slice(2);
  // };
  const addUpperSpace = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/[A-Z]/g, ' $&').trim();
  };
  const addUpperFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    Object.entries(mainCategoryObj).map((item, index) => {
      if (Object.getOwnPropertyNames(mainCategoryObj)[index] === mainCategory) {
        setCategoryFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });

    Object.entries(mainCategoryObj.autoMotoBoats).map((item) => {
      if (item[0] === category) {
        setSubCategoryAutoFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });

    Object.entries(mainCategoryObj.autoMotoBoats.cars).map((item) => {
      if (item[0] === subCategory) {
        setModelAutoFinal(item[1]);
      }
      return null;
    });

    Object.entries(mainCategoryObj.electronicsAppliances).map((item) => {
      if (item[0] === category) {
        setSubCategoryElectronicFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });

    Object.entries(mainCategoryObj.fashion).map((item) => {
      if (item[0] === category) {
        setSubCategoryFashionFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.autoParts).map((item) => {
      if (item[0] === category) {
        setSubCategoryAutoPartsFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.houseAndGarden).map((item) => {
      if (item[0] === category) {
        setSubCategoryHouseAndGardenFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.momsKids).map((item) => {
      if (item[0] === category) {
        setSubCategoryMomsKidsFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.sportFreeTimeArt).map((item) => {
      if (item[0] === category) {
        setSubCategorySportFreeTimeArtFinal(
          Object.getOwnPropertyNames(item[1])
        );
      }
      return null;
    });
    Object.entries(mainCategoryObj.animals).map((item) => {
      if (item[0] === category) {
        setSubCategoryAnimalsFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.agroIndustry).map((item) => {
      if (item[0] === category) {
        setSubCategoryAgroIndustryFinal(Object.getOwnPropertyNames(item[1]));
      }
      return null;
    });
    Object.entries(mainCategoryObj.servicesCompanyEquipment).map((item) => {
      if (item[0] === category) {
        setSubCategoryServicesCompanyEquipmentFinal(
          Object.getOwnPropertyNames(item[1])
        );
      }
      return null;
    });
  }, [mainCategory, category, subCategory]);

  return (
    <>
      <div className="main-filter-container">
        <Helmet>
          <title>Market App</title>
        </Helmet>
        <h3>Filters</h3>
        <div className="filters-container">
          {/* <HiddenNavHome /> */}
          <section className="mainCategory">
            <label className="mb-1">Main category</label>
            <div className="dropdown" controlid="mainCategory">
              <button className="dropbtn" type="button">
                {addUpperSpace(mainCategory)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {mainCategoryArr.map(({ value, name, id }) => (
                  <Link
                    to={`/filters/pageNumber/1/mainCategory/${value}/name/all/category/all/subCategory/all/model/all/steeringWheel/all/carosery/all/colour/all/condition/all/fuel/all/minPrice/0/maxPrice/0/minYear/0/maxYear/0/minKm/0/maxKm/0/minEngine/0/maxEngine/0/minHorsePower/0/maxHorsePower/0/furnished/all/rooms/all/minUsefulSurface/0/maxUsefulSurface/0/groundType/all/commerceType/all/brand/all/rezolution/all/usefulTask/all/size/all/material/all/season/all/display/all/whichFor/all/waterResistance/all/caseMaterial/all/caseColour/all/soleType/all/floor/all/minLandArea/0/maxLandArea/0/minBuiltArea/0/maxBuiltArea/0/compartimentType/all/productType/all/chargeType/all/mountType/all/tireSize/all/tireWidth/all/tireProfile/all/rimType/all/rimSize/all/age/all/experience/all/operationDistance/all/availability/all/financePosibility/all/guarantee/all/emergencyService/all/memoryR/all/videoType/all/storageType/all/processorBrand/all`}
                    key={id}
                    style={{ textDecoration: 'none' }}
                    onClick={(e) => {
                      setMaxPriceSelected('To');
                      setMinPriceSelected('From');
                      //setMainCategorySelect(value);
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          {mainCategory !== 'all' && (
            <section className="category">
              <label className="mb-1">Category</label>
              <div className="dropdown" controlid="category">
                <button className="dropbtn" type="button">
                  {addUpperSpace(category)}
                  <span>
                    <BiChevronDown className="icon-style" />
                  </span>
                </button>
                <div className="dropdown-content">
                  {categoryFinal.map((c, index) => (
                    <Link
                      to={`/filters/pageNumber/1/mainCategory/${mainCategory}/name/all/category/${c}/subCategory/all/model/all/steeringWheel/all/carosery/all/colour/all/condition/all/fuel/all/minPrice/0/maxPrice/0/minYear/0/maxYear/0/minKm/0/maxKm/0/minEngine/0/maxEngine/0/minHorsePower/0/maxHorsePower/0/furnished/all/rooms/all/minUsefulSurface/0/maxUsefulSurface/0/groundType/all/commerceType/all/brand/all/rezolution/all/usefulTask/all/size/all/material/all/season/all/display/all/whichFor/all/waterResistance/all/caseMaterial/all/caseColour/all/soleType/all/floor/all/minLandArea/0/maxLandArea/0/minBuiltArea/0/maxBuiltArea/0/compartimentType/all/productType/all/chargeType/all/mountType/all/tireSize/all/tireWidth/all/tireProfile/all/rimType/all/rimSize/all/age/all/experience/all/operationDistance/all/availability/all/financePosibility/all/guarantee/all/emergencyService/all/memoryR/all/videoType/all/storageType/all/processorBrand/all`}
                      onClick={(e) => {
                        setMaxPriceSelected('To');
                        setMinPriceSelected('From');
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
          <section className="price">
            <label className="mb-1">Price</label>
            <div className="interval-filter">
              <div className="dropdown-interval" controlid="price">
                <button className="dropbtn-interval" type="button">
                  {minPriceSelected}
                  <span>
                    {minPriceSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minPrice: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinPriceSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {priceArray.map((p, index) => (
                    <div>
                      <Link
                        to={getFilterUrl({ minPrice: p })}
                        key={index}
                        style={{ textDecoration: 'none' }}
                        onClick={() => setMinPriceSelected(p)}
                      >
                        {p}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dropdown-interval" controlid="price">
                <button className="dropbtn-interval" type="button">
                  {maxPriceSelected}
                  <span>
                    {maxPriceSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxPrice: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxPriceSelected('To')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {priceArray.map((p, index) => (
                    <Link
                      to={getFilterUrl({ maxPrice: p })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxPriceSelected(p)}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <RealEstateFiltersComponent
            getFilterUrl={getFilterUrl}
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            category={category}
            rooms={rooms}
            furnished={furnished}
            mainCategory={mainCategory}
            groundType={groundType}
            commerceType={commerceType}
            size={size}
            whichFor={whichFor}
            floor={floor}
            compartimentType={compartimentType}
          />
          <AutoPartsComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            category={category}
            subCategory={subCategory}
            subCategoryAutoPartsFinal={subCategoryAutoPartsFinal}
            season={season}
            tireSize={tireSize}
            tireWidth={tireWidth}
            tireProfile={tireProfile}
            rimType={rimType}
            rimSize={rimSize}
            brand={brand}
            productType={productType}
            chargeType={chargeType}
            mountType={mountType}
            condition={condition}
            whichFor={whichFor}
          />
          <HouseGardenFilterComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            condition={condition}
            mainCategory={mainCategory}
            subCategoryHouseAndGardenFinal={subCategoryHouseAndGardenFinal}
            subCategory={subCategory}
            category={category}
          />
          <MomsKidsFiltersComponents
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            category={category}
            subCategory={subCategory}
            colour={colour}
            age={age}
            brand={brand}
            condition={condition}
            subCategoryMomsKidsFinal={subCategoryMomsKidsFinal}
          />
          <FashionFIltersComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            category={category}
            brand={brand}
            colour={colour}
            subCategory={subCategory}
            size={size}
            material={material}
            season={season}
            display={display}
            whichFor={whichFor}
            waterResistance={waterResistance}
            caseMaterial={caseMaterial}
            caseColour={caseColour}
            soleType={soleType}
            subCategoryFashionFinal={subCategoryFashionFinal}
            condition={condition}
          />
          <SportFreeTimeArtFilterComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            subCategorySportFreeTimeArtFinal={subCategorySportFreeTimeArtFinal}
            subCategory={subCategory}
            condition={condition}
            category={category}
          />
          <ElectronicFiltersComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            subCategoryElectronicFinal={subCategoryElectronicFinal}
            condition={condition}
            brand={brand}
            rezolution={rezolution}
            category={category}
            subCategory={subCategory}
            memoryR={memoryR}
            videoType={videoType}
            storageType={storageType}
            processorBrand={processorBrand}
            size={size}
            model={model}
            whichFor={whichFor}
          />
          <AutoMotoBoatsFiltersComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            mainCategory={mainCategory}
            usefulTask={usefulTask}
            subCategoryAutoFinal={subCategoryAutoFinal}
            modelFinal={modelFinal}
            category={category}
            subCategory={subCategory}
            steeringWheel={steeringWheel}
            model={model}
            carosery={carosery}
            fuel={fuel}
            condition={condition}
            colour={colour}
          />
          <AnimalsFiltersComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            category={category}
            age={age}
            subCategoryAnimalsFinal={subCategoryAnimalsFinal}
            subCategory={subCategory}
          />
          <ServicesCompanyEquipmentFiltersComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            experience={experience}
            operationDistance={operationDistance}
            availability={availability}
            financePosibility={financePosibility}
            guarantee={guarantee}
            emergencyService={emergencyService}
            category={category}
            subCategory={subCategory}
            subCategoryServicesCompanyEquipmentFinal={
              subCategoryServicesCompanyEquipmentFinal
            }
            whichFor={whichFor}
          />
          <AgroIndustryFiltersComponent
            addUpperSpace={addUpperSpace}
            addUpperFirst={addUpperFirst}
            getFilterUrl={getFilterUrl}
            category={category}
            subCategoryAgroIndustryFinal={subCategoryAgroIndustryFinal}
            subCategory={subCategory}
          />
        </div>
        <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="product-list">
                {products.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </div>
              <div className="pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
