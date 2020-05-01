var express = require("express");
var router = express.Router();

const { fundOptions } = require("../../controllers/user/userFundOptions");

router.get("/user/fundoptions", fundOptions);

module.exports = router;
