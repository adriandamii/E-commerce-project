const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoute.js');
const userRouter = require('./routes/userRouter.js');
const seedRouter = require('./routes/seedRoutes.js');
// const orderRouter = require('./routes/orderRouter.js');


dotenv.config();

const app = express();
app.use(express.json({}));
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://market-place-project.onrender.com'],
    methods: "GET, POST, PUT, DELETE"
  })
);

app.use(express.urlencoded({ extended: true }));
app.use('/seed', seedRouter);
app.use('/products', productRoutes);
app.use('/users', userRouter);
// app.use('/orders', orderRouter);


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} failed to connect`));
