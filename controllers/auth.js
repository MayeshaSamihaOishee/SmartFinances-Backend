const User = require("../models/user");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User Signout",
  });
};
