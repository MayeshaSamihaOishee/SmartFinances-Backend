const Portfolio = require("./../../models/newTransaction");
const portfolio = Portfolio.portfolio;

exports.userDashboard = (req, res) => {
  Portfolio.find().exec((err, porfolio) => {
    if (err) {
      return res.status(400).json({
        error: "No categories found",
      });
    }

    res.json(porfolio);
  });
};
