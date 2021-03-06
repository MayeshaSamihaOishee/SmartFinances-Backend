var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

const {
  signout,
  signup,
  signin,
  isSignedIn,
} = require("../../controllers/user/userAuth");

router.post(
  "/signup/user",
  //using express validator to validate in routes
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name should be at least 3 charecters"),
    check("email").isEmail().withMessage("email is required"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password should be atleast 3 charecters"),
  ],
  signup
);

router.post(
  "/signin/user",
  //using express validator to validate in routes
  [
    check("email").isEmail().withMessage("email is required"),
    check("password")
      .isLength({ min: 1 })
      .withMessage("password sfield is required"),
  ],
  signin
);

router.get("/signout/user", signout);
module.exports = router;
