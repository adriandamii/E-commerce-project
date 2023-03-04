const express = require('express');
const { data } = require('../data.js');
const { User } = require('../models/userModel.js');
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
});
module.exports = seedRouter;
