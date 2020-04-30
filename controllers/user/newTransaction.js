




const Transaction = require("../../models/newTransaction");


exports.AddTransaction = (req, res) =>{
  const transaction = new Transaction(req.body)
  transaction.save((err,transaction)=> {
    if(err){
      return res.status(400).json({
        error:"Not able to save transaction"
      })
    }
    res.json({transaction})
  })
}