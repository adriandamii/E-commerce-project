const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    //general
    name: { type: String, required: false },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    mainCategory: { type: String, required: false },
    category: { type: String, required: false },
    subCategory: { type: String, required: false },
    price: { type: Number, required: false },
    description: { type: String, required: false },
    location: { type: String, required: false },
    daily: { type: String, required: false },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    //realEstate
    usefulSurface: { type: Number, required: false },
    furnished: { type: String, required: false },
    groundType: { type: String, required: false },
    commerceType: { type: String, required: false },
    rooms: { type: String, required: false },
    compartimentType: { type: String, required: false },
    floor: { type: String, required: false },
    landArea: { type: String, required: false },
    builtArea: { type: String, required: false },

    //auto
    model: { type: String, required: false },
    km: { type: Number, required: false },
    carosery: { type: String, required: false },
    fuel: { type: String, required: false },
    engine: { type: Number, required: false },
    year: { type: Number, required: false },
    horsePower: { type: Number, required: false },
    steeringWheel: { type: String, required: false },
    usefulTask: { type: String, required: false },

    //electronic
    rezolution: { type: String, required: false },
    memoryR: { type: String, required: false },
    videoType: { type: String, required: false },
    storageType: { type: String, required: false },
    processorBrand: { type: String, required: false },

    //fashion
    size: { type: String, required: false },
    material: { type: String, required: false },
    season: { type: String, required: false },
    whichFor: { type: String, required: false },
    display: { type: String, required: false },
    waterResistance: { type: String, required: false },
    caseMaterial: { type: String, required: false },
    caseColour: { type: String, required: false },
    soleType: { type: String, required: false },

    //autoparts
    productType: { type: String, required: false },
    chargeType: { type: String, required: false },
    mountType: { type: String, required: false },
    tireSize: { type: String, required: false },
    tireWidth: { type: String, required: false },
    tireProfile: { type: String, required: false },
    rimType: { type: String, required: false },
    rimSize: { type: String, required: false },

    //momsKids
    age: { type: String, required: false },

    //companiesServices
    experience: { type: String, required: false },
    operationDistance: { type: String, required: false },
    availability: { type: String, required: false },
    financePosibility: { type: String, required: false },
    guarantee: { type: String, required: false },
    emergencyService: { type: String, required: false },

    brand: { type: String, required: false },
    colour: { type: String, required: false },
    condition: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

var Product = mongoose.model('Product', productSchema);
module.exports = { Product };
