const cloudinary = require('cloudinary').v2
require("dotenv").config();

  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloud_url: process.env.CLOUDINARY_URL, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  module.exports = cloudinary;