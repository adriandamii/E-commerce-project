const bcrypt = require('bcryptjs');

const data = {
  users: [
    {
      name: 'adi',
      email: 'adrian.damii@yahoo.com',
      password: bcrypt.hashSync('11111', 8),
      isAdmin: true,
      isSeller: true,
    },
    {
      name: 'demo user',
      email: 'demo@example.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: "demoseller",
        description:"demodescription"
      }
    },
  ],
};

module.exports = { data };
