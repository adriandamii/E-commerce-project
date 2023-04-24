const bcrypt = require('bcryptjs');

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('11111', 8),
      isAdmin: true,
      isSeller: true,
    },
    {
      name: 'demo user',
      email: 'demo@example.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "demoseller",
        description:"demodescription"
      }
    },
    {
      name: 'wts1',
      email: 'wts1@example.com',
      password: bcrypt.hashSync('wts1', 8),
      isAdmin: false,
      isSeller: true,
      wantProductUpdate: false,
      wantToSell: false,
      seller: {
        name: "want to sell1",
        description:"qwer"
      }
    },
    {
      name: 'wts2',
      email: 'wts2@example.com',
      password: bcrypt.hashSync('wts2', 8),
      isAdmin: false,
      isSeller: true,
      wantProductUpdate: true,
      wantToSell: false,
      seller: {
        name: "want to sell2",
        description:"asdf"
      }
    },
    {
      name: 'wtb1',
      email: 'wtb1@example.com',
      password: bcrypt.hashSync('wtb1', 8),
      isAdmin: false,
      isSeller: false,
      wantProductUpdate: false,
      wantToSell: true,
      seller: {
        name: "want to buy1",
        description:"aaa"
      }
    },
    {
      name: 'wtb2',
      email: 'wtb2@example.com',
      password: bcrypt.hashSync('wtb2', 8),
      isAdmin: false,
      isSeller: false,
      wantProductUpdate: false,
      wantToSell: true,
      seller: {
        name: "want to buy2",
        description:"bbb"
      }
    },
  ],
};

module.exports = { data };
