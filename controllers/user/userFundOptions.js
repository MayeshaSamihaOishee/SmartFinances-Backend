const Funds = require("./../../models/createFund");

exports.fundOptions = (req, res) => {
  Funds.find().exec((err, funds) => {
    if (err) {
      return res.status(400).json({
        error: "No categories found",
      });
    }

    res.json(funds);
  });
  //  res.json("Fund Options");
};
