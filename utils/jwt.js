const jwt = require("jwt-simple");
const moment = require("moment");

require("dotenv").config();

const secret = process.env.SECRET;

// Función para generar un token JWT
// const createToken = (user) => {
//   const payload = {
//     name: user.displayName,
//     id: user.googleId,
//     iat: moment().unix(),
//     exp: moment().add(1, "days").unix(),
//   };
//   return jwt.encode(payload, secret);
// };

const createToken = (user) => {
  const payload = {
    id: user.id,
    name: user.username,
    email: user.email,
    profilePicture: user.profilePicture,
    iat: moment().unix(),
    exp: moment().add(1, "days").unix(),
  };
  return jwt.encode(payload, secret);
};

module.exports = {
  secret,
  createToken,
};
