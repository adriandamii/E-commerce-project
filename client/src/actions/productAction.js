import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_MAX_LIMIT,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_MAX_LIMIT,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';
import Axios from 'axios';

export const getProducts =
  ({
    name = '',
    pageNumber = '',
    seller = '',
    mainCategory = '',
    minPrice = 0,
    maxPrice = 0,
    category = '',
    condition = '',
    subCategory = '', //auto,
    minYear = 0,
    maxYear = 0,
    minKm = 0,
    maxKm = 0,
    minEngine = 0,
    maxEngine = 0,
    minHorsePower = 0,
    maxHorsePower = 0,
    usefulTask = '',
    steeringWheel = '',
    carosery = '',
    fuel = '',
    model = '', //auto
    colour = '', //auto, electronicsAppliances,
    brand = '', //electronicsAppliances,
    memoryR = '',
    videoType = '',
    storageType = '',
    processorBrand = '',
    rezolution = '',
    furnished = '', //realEstate
    minLandArea = 0,
    maxLandArea = 0,
    minBuiltArea = 0,
    maxBuiltArea = 0,
    minUsefulSurface = 0,
    maxUsefulSurface = 0,
    rooms = '',
    groundType = '',
    compartimentType = '',
    commerceType = '',
    floor = '',
    size = '',
    material = '', //fashion
    caseColour = '',
    caseMaterial = '',
    soleType = '',
    waterResistance = '',
    display = '',
    whichFor = '',
    season = '', //autoParts, fashion
    mountType = '', //autoParts
    productType = '',
    chargeType = '',
    tireSize = '',
    tireWidth = '',
    tireProfile = '',
    rimType = '',
    rimSize = '',
    age = '', //momsKids
    experience = '', //servicesCompanyEquipment
    operationDistance = '',
    availability = '',
    financePosibility = '',
    guarantee = '',
    emergencyService = '',
  }) =>
  async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    try {
      const { data } = await Axios.get(
        `/products?pageNumber=${pageNumber}&seller=${seller}&name=${name}&mainCategory=${mainCategory}&category=${category}&subCategory=${subCategory}&model=${model}&carosery=${carosery}&groundType=${groundType}&commerceType=${commerceType}&fuel=${fuel}&furnished=${furnished}&rooms=${rooms}&steeringWheel=${steeringWheel}&brand=${brand}&rezolution=${rezolution}&colour=${colour}&condition=${condition}&minPrice=${minPrice}&maxPrice=${maxPrice}&minUsefulSurface=${minUsefulSurface}&maxUsefulSurface=${maxUsefulSurface}&minYear=${minYear}&maxYear=${maxYear}&minKm=${minKm}&maxKm=${maxKm}&minEngine=${minEngine}&maxEngine=${maxEngine}&minHorsePower=${minHorsePower}&maxHorsePower=${maxHorsePower}&usefulTask=${usefulTask}&size=${size}&material=${material}&season=${season}&display=${display}&whichFor=${whichFor}&waterResistance=${waterResistance}&caseMaterial=${caseMaterial}&caseColour=${caseColour}&soleType=${soleType}&floor=${floor}&minLandArea=${minLandArea}&maxLandArea=${maxLandArea}&minBuiltArea=${minBuiltArea}&maxBuiltArea=${maxBuiltArea}&compartimentType=${compartimentType}&productType=${productType}&chargeType=${chargeType}&mountType=${mountType}&tireSize=${tireSize}&tireWidth=${tireWidth}&tireProfile=${tireProfile}&rimType=${rimType}&rimSize=${rimSize}&age=${age}&experience=${experience}&operationDistance=${operationDistance}&availability=${availability}&financePosibility=${financePosibility}&guarantee=${guarantee}&emergencyService=${emergencyService}&memoryR=${memoryR}&videoType=${videoType}&storageType=${storageType}&processorBrand=${processorBrand}`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };
export const detailsProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await Axios.get(`/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createProduct = (productData) => async (dispatch, getState) => {
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await Axios.post(`/products`, productData, config);
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateProduct =
  (id, productData) => async (dispatch, getstate) => {
    const {
      userSignin: { userInfo },
    } = getstate();
    dispatch({ type: PRODUCT_UPDATE_REQUEST });
    try {
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
      const { data } = await Axios.put(`/products/${id}`, productData, config);
      dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.error.message
          : error.message;
      dispatch({ type: PRODUCT_UPDATE_FAIL, payload: message });
      if (error.response.status === 500) {
        dispatch({
          type: PRODUCT_UPDATE_MAX_LIMIT,
          payload: error.response.data.error.message,
        });
      }
    }
  };

// export const deleteProduct = (id) => async (dispatch) => {
//   dispatch({ type: PRODUCT_DELETE_REQUEST });
//   try {
//     await Axios.delete(`/products/${id}`);

//     dispatch({ type: PRODUCT_DELETE_SUCCESS });
//   } catch (error) {
//     dispatch({ type: PRODUCT_DELETE_FAIL });
//   }
// };

export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await Axios.delete(`/products/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};
