const jwt = require("jsonwebtoken");
const makeToken = (data, exp = "7d") => {
  const jwtToken = jwt.sign(data, process.env.JWT_SECRECT, { expiresIn: exp });
  return jwtToken;
};

module.exports = makeToken;
