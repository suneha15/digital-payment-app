require("dotenv").config();

console.log("JWT_SECRET from config:", process.env.JWT_SECRET);

module.exports = {
    JWT_SECRET : process.env.JWT_SECRET,
};