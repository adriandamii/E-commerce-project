const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../models/userModel.js');
const { generateToken, isAdmin, isAuth } = require('../utils.js');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require("crypto");

const userRouter = express.Router();

userRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.get(
  '/top-sellers',
  expressAsyncHandler(async (req, res) => {
    const topSellers = await User.find({ isSeller: true })
      .sort({ 'seller.rating': -1 })
      .limit(3);
    res.send(topSellers);
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          isSeller: user.isSeller,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

// userRouter.post(
//   '/register',
//   expressAsyncHandler(async (req, res) => {
//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: bcrypt.hashSync(req.body.password, 8),
//     });
//     const createdUser = await user.save();
//     res.send({
//       _id: createdUser._id,
//       name: createdUser.name,
//       email: createdUser.email,
//       isAdmin: createdUser.isAdmin,
//       isSeller: user.isSeller,
//       token: generateToken(createdUser),
//     });
//   })
// );

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const multer = require('multer');
const ErrorHandler = require('../utils/errorhander.js');
const sendToken = require('../utils/jwtToken.js');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    return cb(res.status(400).end('Only jpeg, jpg, png are allowed', false));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

userRouter.post("/password/forgot", expressAsyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `http://localhost:3000/password/reset/${resetToken}`;

  const mail = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    let mailOptions = {
      from: '"NodeMailer" <adriandamiii@gmail.com>',
      to: user.email,
      subject: 'Forgot Password',
      html: mail,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
})
);
// Reset Password
userRouter.put("/password/reset/:token", expressAsyncHandler(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
})
);


userRouter.post(
  '/register',
  upload.single('registerImage'),
  expressAsyncHandler(async (req, res) => {
    try {
      let {
        registerUsername,
        registerEmail,
        registerPassword,
        registerCheckPassword,
      } = req.body;

      // validate
      if (
        !registerUsername ||
        !registerEmail ||
        !registerPassword ||
        !registerCheckPassword
      ) {
        return res.status(400).json({
          msg: 'Not all fields have been entered.',
        });
      }
      if (registerPassword.length < 5) {
        return res.status(400).json({
          msg: 'The password needs to be atleast 5 characters long',
        });
      }
      if (registerPassword != registerCheckPassword) {
        return res.status(400).json({
          msg: 'Enter the same password twice for verification',
        });
      }
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          String(registerEmail).toLowerCase()
        )
      ) {
        return res.status(400).json({
          msg: 'Invalid Email',
        });
      }

      const existingUser = await User.findOne({ email: registerEmail });
      if (existingUser) {
        return res.status(400).json({
          msg: 'An account with this email already exists',
        });
      }
      let registerImage = req.file ? req.file.filename : 'default.png';

      const token = jwt.sign(
        { registerUsername, registerEmail, registerPassword, registerImage },
        process.env.JWT_SECRET || 'somethingsecret',
        { expiresIn: '20m' }
      );
      let activationDeployTest = `https://market-place-project-8bem.onrender.com/authentication/activate/${token}`;
      let activationUrl = `http://localhost:3000/authentication/activate/${token}`;
      const mail = `
          <p> Hello ${registerUsername}, </p>
          <p>Welcome to the Adrian's Market</p>
          <h3>Please click on given link to activate your account</h3>
          <a
                  class="reset-btn"
                  style="
                    color: rgb(68, 68, 68);
                    font-weight: 900;
                    text-decoration: none;
                    text-transform: uppercase;
                  "
                  target="blank"
                  href="${activationDeployTest}"
                >
                  Activation Link
                </a>     
          `;

      let mailOptions = {
        from: '"E-commerce Project" <adriandamiii@gmail.com>',
        to: registerEmail,
        subject: 'Account Activation',
        html: mail,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        res.status(200).json({
          message: 'Email has been sent, kindly activate your account',
        });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
);

userRouter.post(
  '/email-activate',
  expressAsyncHandler(async (req, res) => {
    try {
      const { token } = req.body;
      if (token) {
        jwt.verify(
          token,
          process.env.JWT_SECRET || 'somethingsecret',
          async (err, decodedToken) => {
            if (err) {
              return res
                .status(400)
                .json({ error: 'Incorrect or expired Link.' });
            }
            const { registerUsername, registerEmail, registerPassword } =
              decodedToken;
            const existingUser = await User.findOne({ email: registerEmail });
            if (existingUser) {
              return res.status(400).json({
                msg: 'An account with this email already exists',
              });
            }
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(registerPassword, salt);
            const newUser = new User({
              name: registerUsername,
              email: registerEmail,
              password: passwordHash,
            });
            const savedUser = await newUser.save();
            return res.status(200).json(savedUser);
          }
        );
      } else {
        return res.json({
          error: 'Error in verifying account. Please try again',
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  })
);

userRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);
userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (user.isSeller) {
        user.seller.name = req.body.sellerName || user.seller.name;
        user.seller.logo = req.body.sellerLogo || user.seller.logo;
        user.seller.description =
          req.body.sellerDescription || user.seller.description;
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(updatedUser),
      });
    }
  })
);

userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: 'User Deleted', user: deleteUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isSeller = Boolean(req.body.isSeller);
      user.isAdmin = Boolean(req.body.isAdmin);
      // user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

module.exports = userRouter;
