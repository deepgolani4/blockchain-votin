const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;

module.exports = (data) => {
  console.log(data, secret);
  const tkn = jwt.sign(data, secret);

  console.log(tkn);
  return tkn;
};
