const express = require('express');
const mongoose = require('mongoose');
const expressAsyncHandler = require('express-async-handler');
const { Product } = require('../models/productModel.js');
const multer = require('multer');
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const { isAdmin, isAuth, isSellerOrAdmin } = require('../utils.js');

require('dotenv').config();

var Storage = multer.memoryStorage();

const upload = multer({
  storage: Storage,
  limits: { fieldSize: 50 * 1024 * 1024 },
  quality: 'auto',
}).array('images');

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const order = req.query.order || '';
    const seller = req.query.seller || '';
    const name = req.query.name || '';
    const mainCategory = req.query.mainCategory || '';
    const category = req.query.category || '';
    const subCategory = req.query.subCategory || '';
    const groundType = req.query.groundType || '';
    const rezolution = req.query.rezolution || '';
    const brand = req.query.brand || '';
    const model = req.query.model || '';
    const fuel = req.query.fuel || '';
    const commerceType = req.query.commerceType || '';
    const usefulTask = req.query.usefulTask || '';
    const carosery = req.query.carosery || '';
    const furnished = req.query.furnished || '';
    const rooms = req.query.rooms || '';
    const steeringWheel = req.query.steeringWheel || '';
    const colour = req.query.colour || '';
    const size = req.query.size || '';
    const material = req.query.material || '';
    const season = req.query.season || '';
    const display = req.query.display || '';
    const whichFor = req.query.whichFor || '';
    const waterResistance = req.query.waterResistance || '';
    const caseMaterial = req.query.caseMaterial || '';
    const caseColour = req.query.caseColour || '';
    const soleType = req.query.soleType || '';
    const condition = req.query.condition || '';
    const floor = req.query.floor || '';
    const compartimentType = req.query.compartimentType || '';
    const productType = req.query.productType || '';
    const chargeType = req.query.chargeType || '';
    const mountType = req.query.mountType || '';
    const tireSize = req.query.tireSize || '';
    const tireWidth = req.query.tireWidth || '';
    const tireProfile = req.query.tireProfile || '';
    const rimType = req.query.rimType || '';
    const rimSize = req.query.rimSize || '';
    const age = req.query.age || '';
    const experience = req.query.experience || '';
    const operationDistance = req.query.operationDistance || '';
    const financePosibility = req.query.financePosibility || '';
    const availability = req.query.availability || '';
    const guarantee = req.query.guarantee || '';
    const emergencyService = req.query.emergencyService || '';
    const memoryR = req.query.memoryR || '';
    const videoType = req.query.videoType || '';
    const storageType = req.query.storageType || '';
    const processorBrand = req.query.processorBrand || '';
    const location = req.query.location || '';
    const daily = req.query.daily || '';

    const minPrice =
      req.query.minPrice && Number(req.query.minPrice) !== 0
        ? Number(req.query.minPrice)
        : 0;
    const maxPrice =
      req.query.maxPrice && Number(req.query.maxPrice) !== 0
        ? Number(req.query.maxPrice)
        : 0;

    const minYear =
      req.query.minYear && Number(req.query.minYear) !== 0
        ? Number(req.query.minYear)
        : 0;
    const maxYear =
      req.query.maxYear && Number(req.query.maxYear) !== 0
        ? Number(req.query.maxYear)
        : 0;

    const minEngine =
      req.query.minEngine && Number(req.query.minEngine) !== 0
        ? Number(req.query.minEngine)
        : 0;

    const maxEngine =
      req.query.maxEngine && Number(req.query.maxEngine) !== 0
        ? Number(req.query.maxEngine)
        : 0;

    const minHorsePower =
      req.query.minHorsePower && Number(req.query.minHorsePower) !== 0
        ? Number(req.query.minHorsePower)
        : 0;
    const maxHorsePower =
      req.query.maxHorsePower && Number(req.query.maxHorsePower) !== 0
        ? Number(req.query.maxHorsePower)
        : 0;

    const minUsefulSurface =
      req.query.minUsefulSurface && Number(req.query.minUsefulSurface) !== 0
        ? Number(req.query.minUsefulSurface)
        : 0;

    const maxUsefulSurface =
      req.query.maxUsefulSurface && Number(req.query.maxUsefulSurface) !== 0
        ? Number(req.query.maxUsefulSurface)
        : 0;

    const minKm =
      req.query.minKm && Number(req.query.minKm) !== 0
        ? Number(req.query.minKm)
        : 0;

    const maxKm =
      req.query.maxKm && Number(req.query.maxKm) !== 0
        ? Number(req.query.maxKm)
        : 0;
    const minLandArea =
      req.query.minLandArea && Number(req.query.minLandArea) !== 0
        ? Number(req.query.minLandArea)
        : 0;

    const maxLandArea =
      req.query.maxLandArea && Number(req.query.maxLandArea) !== 0
        ? Number(req.query.maxLandArea)
        : 0;
    const minBuiltArea =
      req.query.minBuiltArea && Number(req.query.minBuiltArea) !== 0
        ? Number(req.query.minBuiltArea)
        : 0;

    const maxBuiltArea =
      req.query.maxBuiltArea && Number(req.query.maxBuiltArea) !== 0
        ? Number(req.query.maxBuiltArea)
        : 0;

    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const sellerFilter = seller ? { seller } : {};
    const mainCategoryFilter = mainCategory ? { mainCategory } : {};
    const categoryFilter = category ? { category } : {};
    const subCategoryFilter = subCategory ? { subCategory } : {};
    const groundTypeFilter = groundType ? { groundType } : {};
    const brandFilter = brand ? { brand } : {};
    const rezolutionFilter = rezolution ? { rezolution } : {};
    const modelFilter = model ? { model } : {};
    const fuelFilter = fuel ? { fuel } : {};
    const commerceTypeFilter = commerceType ? { commerceType } : {};
    const caroseryFilter = carosery ? { carosery } : {};
    const furnishedFilter = furnished ? { furnished } : {};
    const roomsFilter = rooms ? { rooms } : {};
    const steeringWheelFilter = steeringWheel ? { steeringWheel } : {};
    const usefulTaskFilter = usefulTask ? { usefulTask } : {};
    const colourFilter = colour ? { colour } : {};
    const conditionFilter = condition ? { condition } : {};
    const sizeFilter = size ? { size } : {};
    const materialFilter = material ? { material } : {};
    const seasonFilter = season ? { season } : {};
    const displayFilter = display ? { display } : {};
    const whichForFilter = whichFor ? { whichFor } : {};
    const waterResistanceFilter = waterResistance ? { waterResistance } : {};
    const caseMaterialFilter = caseMaterial ? { caseMaterial } : {};
    const caseColourFilter = caseColour ? { caseColour } : {};
    const soleTypeFilter = soleType ? { soleType } : {};
    const floorFilter = floor ? { floor } : {};
    const compartimentTypeFilter = compartimentType ? { compartimentType } : {};
    const productTypeFilter = productType ? { productType } : {};
    const chargeTypeFilter = chargeType ? { chargeType } : {};
    const mountTypeFilter = mountType ? { mountType } : {};
    const tireSizeFilter = tireSize ? { tireSize } : {};
    const tireWidthFilter = tireWidth ? { tireWidth } : {};
    const tireProfileFilter = tireProfile ? { tireProfile } : {};
    const rimTypeFilter = rimType ? { rimType } : {};
    const rimSizeFilter = rimSize ? { rimSize } : {};
    const ageFilter = age ? { age } : {};
    const experienceFilter = experience ? { experience } : {};
    const operationDistanceFilter = operationDistance
      ? { operationDistance }
      : {};
    const availabilityFilter = availability ? { availability } : {};
    const financePosibilityFilter = financePosibility
      ? { financePosibility }
      : {};
    const guaranteeFilter = guarantee ? { guarantee } : {};
    const emergencyServiceFilter = emergencyService ? { emergencyService } : {};
    const memoryRFilter = memoryR ? { memoryR } : {};
    const videoTypeFilter = videoType ? { videoType } : {};
    const storageTypeFilter = storageType ? { storageType } : {};
    const processorBrandFilter = processorBrand ? { processorBrand } : {};
    const locationFilter = location ? { location } : {};
    const dailyFilter = daily ? { daily } : {};

    const priceFilter =
      minPrice && maxPrice
        ? { price: { $gte: minPrice, $lte: maxPrice } }
        : minPrice
        ? { price: { $gte: minPrice } }
        : maxPrice
        ? { price: { $lte: maxPrice } }
        : {};

    const yearFilter =
      minYear && maxYear
        ? { year: { $gte: minYear, $lte: maxYear } }
        : minYear
        ? { year: { $gte: minYear } }
        : maxYear
        ? { year: { $lte: maxYear } }
        : {};

    const engineFilter =
      minEngine && maxEngine
        ? { engine: { $gte: minEngine, $lte: maxEngine } }
        : minEngine
        ? { engine: { $gte: minEngine } }
        : maxEngine
        ? { engine: { $lte: maxEngine } }
        : {};

    const horsePowerFilter =
      minHorsePower && maxHorsePower
        ? { horsePower: { $gte: minHorsePower, $lte: maxHorsePower } }
        : minHorsePower
        ? { horsePower: { $gte: minHorsePower } }
        : maxHorsePower
        ? { horsePower: { $lte: maxHorsePower } }
        : {};

    const usefulSurfaceFilter =
      minUsefulSurface && maxUsefulSurface
        ? { usefulSurface: { $gte: minUsefulSurface, $lte: maxUsefulSurface } }
        : minUsefulSurface
        ? { usefulSurface: { $gte: minUsefulSurface } }
        : maxUsefulSurface
        ? { usefulSurface: { $lte: maxUsefulSurface } }
        : {};

    const kmFilter =
      minKm && maxKm
        ? { km: { $gte: minKm, $lte: maxKm } }
        : minKm
        ? { km: { $gte: minKm } }
        : maxKm
        ? { km: { $lte: maxKm } }
        : {};

    const builtAreaFilter =
      minBuiltArea && maxBuiltArea
        ? { builtArea: { $gte: minBuiltArea, $lte: maxBuiltArea } }
        : minBuiltArea
        ? { builtArea: { $gte: minBuiltArea } }
        : maxBuiltArea
        ? { builtArea: { $lte: maxBuiltArea } }
        : {};

    const landAreaFilter =
      minLandArea && maxLandArea
        ? { landArea: { $gte: minLandArea, $lte: maxLandArea } }
        : minLandArea
        ? { landArea: { $gte: minLandArea } }
        : maxLandArea
        ? { landArea: { $lte: maxLandArea } }
        : {};

    const sortOrder =
      order === 'lowest'
        ? { price: 1 }
        : order === 'highest'
        ? { price: -1 }
        : order === 'toprated'
        ? { rating: -1 }
        : { _id: -1 };

    const count = await Product.count({
      ...nameFilter,
      ...sellerFilter,
      ...mainCategoryFilter,
      ...categoryFilter,
      ...subCategoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...rezolutionFilter,
      ...groundTypeFilter,
      ...modelFilter,
      ...furnishedFilter,
      ...usefulSurfaceFilter,
      ...roomsFilter,
      ...fuelFilter,
      ...caroseryFilter,
      ...steeringWheelFilter,
      ...colourFilter,
      ...usefulTaskFilter,
      ...commerceTypeFilter,
      ...conditionFilter,
      ...yearFilter,
      ...engineFilter,
      ...horsePowerFilter,
      ...kmFilter,
      ...sizeFilter,
      ...materialFilter,
      ...seasonFilter,
      ...displayFilter,
      ...whichForFilter,
      ...waterResistanceFilter,
      ...caseMaterialFilter,
      ...caseColourFilter,
      ...soleTypeFilter,
      ...floorFilter,
      ...builtAreaFilter,
      ...landAreaFilter,
      ...compartimentTypeFilter,
      ...productTypeFilter,
      ...chargeTypeFilter,
      ...mountTypeFilter,
      ...tireSizeFilter,
      ...tireWidthFilter,
      ...tireProfileFilter,
      ...rimTypeFilter,
      ...rimSizeFilter,
      ...ageFilter,
      ...experienceFilter,
      ...operationDistanceFilter,
      ...availabilityFilter,
      ...financePosibilityFilter,
      ...guaranteeFilter,
      ...emergencyServiceFilter,
      ...memoryRFilter,
      ...videoTypeFilter,
      ...storageTypeFilter,
      ...processorBrandFilter,
      ...locationFilter,
      ...dailyFilter,
    });

    const products = await Product.find({
      ...sellerFilter,
      ...nameFilter,
      ...mainCategoryFilter,
      ...categoryFilter,
      ...subCategoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...groundTypeFilter,
      ...furnishedFilter,
      ...usefulSurfaceFilter,
      ...roomsFilter,
      ...rezolutionFilter,
      ...modelFilter,
      ...fuelFilter,
      ...caroseryFilter,
      ...commerceTypeFilter,
      ...steeringWheelFilter,
      ...usefulTaskFilter,
      ...colourFilter,
      ...conditionFilter,
      ...yearFilter,
      ...engineFilter,
      ...horsePowerFilter,
      ...kmFilter,
      ...sizeFilter,
      ...materialFilter,
      ...seasonFilter,
      ...displayFilter,
      ...whichForFilter,
      ...waterResistanceFilter,
      ...caseMaterialFilter,
      ...caseColourFilter,
      ...soleTypeFilter,
      ...floorFilter,
      ...builtAreaFilter,
      ...landAreaFilter,
      ...compartimentTypeFilter,
      ...productTypeFilter,
      ...chargeTypeFilter,
      ...mountTypeFilter,
      ...tireSizeFilter,
      ...tireWidthFilter,
      ...tireProfileFilter,
      ...rimTypeFilter,
      ...rimSizeFilter,
      ...ageFilter,
      ...experienceFilter,
      ...operationDistanceFilter,
      ...availabilityFilter,
      ...financePosibilityFilter,
      ...guaranteeFilter,
      ...emergencyServiceFilter,
      ...memoryRFilter,
      ...videoTypeFilter,
      ...storageTypeFilter,
      ...processorBrandFilter,
    })
      .populate('seller', 'seller.name seller.logo')
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    res.send({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

router.put('/:id', isAuth, isSellerOrAdmin, upload, async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander('Product not found', 404));
  }

  // Images Start Here
  let images = [];
  try {
    if (typeof req.body.images === 'string') {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    if (images !== undefined) {
      // Deleting Images From Cloudinary
      for (let i = 0; i < product.images.length; i++) {
        await cloudinary.uploader.destroy(product.images[i].public_id);
      }

      const imagesLinks = [];

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.uploader.upload(images[i], {
          folder: 'products',
          quality: 'auto',
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }

      req.body.images = imagesLinks;
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Error editing product', error: error });
  }
});

router.post('/', isAuth, isSellerOrAdmin, upload, async (req, res) => {
  let images = [];

  try {
    if (typeof req.body.images === 'string') {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
        folder: 'products',
        quality: 'auto',
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    const {
      name,
      mainCategory,
      category,
      subCategory,
      groundType,
      model,
      brand,
      rezolution,
      furnished,
      rooms,
      usefulSurface,
      price,
      year,
      km,
      carosery,
      commerceType,
      fuel,
      engine,
      horsePower,
      usefulTask,
      steeringWheel,
      description,
      colour,
      condition,
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
      builtArea,
      landArea,
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
      location,
      daily,
    } = req.body;

    const product = new Product({
      images: imagesLinks,
      seller: req.user._id,
      name,
      mainCategory,
      category,
      subCategory,
      groundType,
      model,
      brand,
      rezolution,
      furnished,
      rooms,
      usefulSurface,
      price,
      year,
      km,
      carosery,
      commerceType,
      fuel,
      engine,
      horsePower,
      usefulTask,
      steeringWheel,
      description,
      colour,
      condition,
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
      builtArea,
      landArea,
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
      location,
      daily,
    });
    await product.save();
    return res
      .status(201)
      .send({ message: 'New Product created successfully', success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Error creating product', error: error });
  }
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const product = await Product.findById(req.params.id);

  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.uploader.destroy(product.images[i].public_id);
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: 'Product Delete Successfully',
  });
});

module.exports = router;
