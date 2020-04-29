var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

const {
  signout,
  signup,
  signin,
  isSignedIn,
} = require("../../controllers/user/userAuth");

router.get("/signout", signout);

module.exports = router;
