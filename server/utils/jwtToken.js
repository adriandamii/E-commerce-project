// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, Date.now() + process.env.COOKIE_EXPIRE).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
